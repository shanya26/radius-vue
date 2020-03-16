export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Home',
        to: '/home',
        icon: 'cil-speedometer'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Master']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Users',
        to: '/UserList',
        icon: 'cil-drop'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'NAS',
        to: '/NAS',
        icon: 'cil-drop'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Settings',
        to: '/Settings',
        icon: 'cil-drop'
      }    
    ]
  }
]