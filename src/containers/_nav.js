
const configRoutes = ()=>{ 
  const cognitogroup = localStorage.getItem("usergroup")?JSON.parse(localStorage.getItem("usergroup")).toString():"" 
   const routes = [
    {
      _name: 'CSidebarNav',
      _children: [
        {
          _name: 'CSidebarNavItem',
          name: 'Dashboard',
          to: '/dashboard',
          icon: 'cil-speedometer'
        }, 
        {
          _name: 'CSidebarNavItem',
          name: 'Traffic Plan',
          to: '/TrafficPlan',
          icon: 'cil-file'
        }        
      ]
    }
  ];
  if(cognitogroup != 'subscriber'){
    routes[0]._children.push({
          _name: 'CSidebarNavDropdown',
          name: 'Users',
          route: '/UserList',
          icon: 'cil-user',
          class:cognitogroup=='subscriber'?"hide":"",
          items: [
            {
              name: 'Dealers',
              to: '/UserList/dealers',
              class:cognitogroup=='admin'?"":"hide"
            },
            {
              name: 'Subscribers',
              to: '/UserList/subscribers'
            }
          ]
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Radius',
          to: '/Radius',
          icon: 'cil-puzzle'
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Groups',
          to: '/Groups',
          icon: 'cil-puzzle'
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Settings',
          to: '/Settings',
          icon: 'cil-settings'
        })
  }
  return routes;
}

export default configRoutes