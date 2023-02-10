import { HomeOutlined, AppstoreAddOutlined, MenuOutlined, FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined, BgColorsOutlined } from '@ant-design/icons';

const menuConfig = [
  {
    title: '首页', // 菜单标题名称
    key: '/home', // 对应的path
    icon: <HomeOutlined />, // 图标名称
    isPublic: true, // 公开的
  },
  {
    title: '商品',
    key: '/products',
    icon: <AppstoreAddOutlined />,
    children: [ // 子菜单列表
      {
        title: '品类管理',
        key: '/category',
        icon: <MenuOutlined />
      },
      {
        title: '商品管理',
        key: '/product',
        icon: <MenuOutlined /> 
      },
    ]
  },

  {
    title: '用户管理',
    key: '/user',
    icon: <TeamOutlined />
  },
  {
    title: '角色管理',
    key: '/role',
    icon: <UserOutlined />,
  },

  {
    title: '图形图表',
    key: '/charts',
    icon: <UserOutlined />,
    children: [
      {
        title: '柱形图',
        key: '/charts/bar',
        icon: <UserOutlined />
      },
      {
        title: '折线图',
        key: '/charts/line',
        icon: <UserOutlined />
      },
      {
        title: '饼图',
        key: '/charts/pie',
        icon: <UserOutlined />
      },
    ]
  },

  {
    title: '订单管理',
    key: '/order',
    icon: <UserOutlined />,
  },
];


// const menuConfig = [
//   {
//     title: '首页', // 菜单标题名称
//     key: '/home', // 对应的path
//     icon: 'home', // 图标名称
//     isPublic: true, // 公开的
//   },
//   {
//     title: '商品',
//     key: '/products',
//     icon: 'appstore',
//     children: [ // 子菜单列表
//       {
//         title: '品类管理',
//         key: '/category',
//         icon: 'bars'
//       },
//       {
//         title: '商品管理',
//         key: '/product',
//         icon: 'tool'
//       },
//     ]
//   },

//   {
//     title: '用户管理',
//     key: '/user',
//     icon: 'user'
//   },
//   {
//     title: '角色管理',
//     key: '/role',
//     icon: 'safety',
//   },

//   {
//     title: '图形图表',
//     key: '/charts',
//     icon: 'area-chart',
//     children: [
//       {
//         title: '柱形图',
//         key: '/charts/bar',
//         icon: 'bar-chart'
//       },
//       {
//         title: '折线图',
//         key: '/charts/line',
//         icon: 'line-chart'
//       },
//       {
//         title: '饼图',
//         key: '/charts/pie',
//         icon: 'pie-chart'
//       },
//     ]
//   },

//   {
//     title: '订单管理',
//     key: '/order',
//     icon: 'windows',
//   },
// ];
export default menuConfig 