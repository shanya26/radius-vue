import sys
import logging
import pymysql
import json

#rds settings
rds_host  = "database-1.cxraenayhbcj.us-east-1.rds.amazonaws.com"
name = "radius"
password = "radpass"
db_name = "patech"

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

try:
    conn = pymysql.connect(rds_host, user=name, passwd=password, db=db_name, connect_timeout=5, charset='utf8mb4',cursorclass=pymysql.cursors.DictCursor)
    logger.debug("SUCCESS: Connection to RDS MySQL instance succeeded")
except pymysql.MySQLError as e:
    logger.error("ERROR: Unexpected error: Could not connect to MySQL instance.")
    logger.error(e)
    sys.exit()



def lambda_handler(event, context):
    output = []
    success = 0
    failure = 0
    try:
        acc = json.dumps(event['records'])
        data = json.loads(acc)
        logger.debug('data : {0} '.format(data))

        #timestamp = str(datetime.utcnow().timestamp())
        #data ['STDataTime'] = timestamp
        #logger.debug('data : {0} '.format(data))
        httpmethod = event['context']['http-method']
        
        if httpmethod == 'PUT' or httpmethod == 'POST' :
            if 'event' not in data:
                raise Exception("No event specified")
            if data['event'] == 'I_nas':
                status = I_nas(data)
            if data['event'] == 'I_radcheck':
                status = I_radcheck(data)
            if data['event'] == 'U_radcheck':
                status = U_radcheck(data)
            if data['event'] == 'U_nas':
                status = U_nas(data)

            if status:
                output.append({'data': acc, 'result': 'Ok'}) 
                success += 1
            else:
                output.append({'data': acc, 'result': 'Dropped'}) 
                failure += 1
        if httpmethod == 'GET':
            if event['params']['querystring']['event'] == 'G_nas':
                logger.debug('httpmethod : {0} '.format(httpmethod))
                status = G_nas(event['params']['querystring']['username'])
                output.append({'data': status, 'result': 'Ok'}) 
            if event['params']['querystring']['event'] == 'G_radcheck':
                status = G_radcheck(event['params']['querystring']['username'])
                output.append({'data': status, 'result': 'Ok'})

    except Exception:
        output.append({'data': acc, 'result': 'Dropped'}) 
        failure += 1
        status = sys.exc_info()
        logger.error('Failed to deliver {0} records, {1}'.format(failure, status))

    return output
    
def I_nas(data):
    try:
        nasname = data['nasname']
        shortname = data['username']
        secret = data['secret']
        community = data['community']
        description = data['description']
        sql = "INSERT INTO  nas (nasname,shortname,secret,community,description) VALUES "
        sql = sql + "('"+nasname+"','"+shortname+"','"+secret+"','"+community+"', '"+description+"')"
        logger.debug('SQL: {0} '.format(sql))
        with conn.cursor() as cur:
            cur.execute(sql)
            conn.commit()
            status = 1
    except Exception:
        status = sys.exc_info()
        logger.error('Nas: {0} failed to add in database, {1}'.format(nasname, status))
        status = 0
    return status
    
def I_radcheck(data):
    try:
        username = data['username']
        attribute = data['attribute']
        op = data['op']
        value = data['value']
        sql = "INSERT INTO  radcheck (username,attribute,op,value) VALUES "
        sql = sql + "('"+username+"','"+attribute+"','"+op+"','"+value+"')"
        with conn.cursor() as cur:
            cur.execute(sql)
            conn.commit()
            status = 1
    except Exception:
        status = sys.exc_info()
        logger.error('username: {0} failed to add in database, {1}'.format(data['username'], status))
        status = 0
    return status

def G_nas(username):
    try:
        sql = "SELECT * FROM nas WHERE shortname='"+ username+"';"
        logger.debug('SQL: {0} '.format(sql))
        with conn.cursor() as cursor:
            cursor.execute(sql)
            result = cursor.fetchall()
            logger.debug('result: {0} '.format(result))
    except Exception:
        status = sys.exc_info()
        logger.error('username: {0} failed to retrive data database, {1}'.format(data['username'], status))
        result = 0
    return result

def G_radcheck(username):
    try:
        sql = "SELECT * FROM radcheck WHERE username='"+ username+"';"
        logger.debug('SQL: {0} '.format(sql))
        with conn.cursor() as cursor:
            cursor.execute(sql)
            result = cursor.fetchall()
            print(result)
    except Exception:
        status = sys.exc_info()
        logger.error('username: {0} failed to retrive data database, {1}'.format(data['username'], status))
        result = 0
    return result

def U_radchec(data):
    try:
        password = data['password']
        username = data['username']
        sql = "update radcheck set value='"+ password+"' where username ='"+ username+"';"
        logger.debug('SQL: {0} '.format(sql))
        with conn.cursor() as cursor:
            cursor.execute(sql)
            result = cursor.fetchall()
            logger.debug('result: {0} '.format(result))
    except Exception:
        status = sys.exc_info()
        logger.error('username: {0} failed to retrive data database, {1}'.format(data['username'], status))
        result = 0
    return result
    
def U_radcheck(data):
    try:
        username = data['username']
        password = data['password']
        sql = "UPDATE radcheck SET value='"+ password+"' where username ='"+ username+"';"
        logger.debug('SQL: {0} '.format(sql))
        with conn.cursor() as cur:
            cur.execute(sql)
            conn.commit()
            status = 1
    except Exception:
        status = sys.exc_info()
        logger.error('username: {0} failed to add in database, {1}'.format(data['username'], status))
        status = 0
    return status

def U_nas(data):
    try:
        nasname = data['nasname']
        username = data['username']
        secret = data['secret']
        sql = "UPDATE nas SET secret='"+ secret+"' where shortname ='"+ username+"' and nasname ='"+ nasname+"';"
        logger.debug('SQL: {0} '.format(sql))
        with conn.cursor() as cur:
            cur.execute(sql)
            conn.commit()
            status = 1
    except Exception:
        status = sys.exc_info()
        logger.error('username: {0} failed to add in database, {1}'.format(data['username'], status))
        status = 0
    return status