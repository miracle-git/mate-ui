export default [
  {
    path: 'alert:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '反馈',
      title: 'Alert',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Ct7bT7rrTTAAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*-U3XQqYN7VsAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '警告提示',
    },
    component: () => import('../../../components/alert/demo/index.vue'),
  },
  {
    path: 'affix:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '其他',
      title: 'Affix',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*YSm4RI3iOJ8AAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*03dxS64LxeQAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '固钉',
    },
    component: () => import('../../../components/affix/demo/index.vue'),
  },
  {
    path: 'anchor:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '导航',
      cols: 1,
      title: 'Anchor',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*TBTSR4PyVmkAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JGb3RIzyOCkAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '锚点',
    },
    component: () => import('../../../components/anchor/demo/index.vue'),
  },
  {
    path: 'app:lang(-cn)?',
    meta: {
      category: 'Components',
      cols: 1,
      type: '其它',
      title: 'App',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*TBTSR4PyVmkAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JGb3RIzyOCkAAAAAAAAAAAAADrJ8AQ/original',
      tag: 'New',
      subtitle: '包裹组件',
    },
    component: () => import('../../../components/app/demo/index.vue'),
  },
  {
    path: 'auto-complete:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据录入',
      cols: 2,
      title: 'AutoComplete',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*g8THS4NpV6sAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*WERTQ6qvgEYAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '自动完成',
    },
    component: () => import('../../../components/auto-complete/demo/index.vue'),
  },
  {
    path: 'avatar:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Avatar',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JJBSS5lBG4IAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*YbgyQaRGz-UAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '头像',
    },
    component: () => import('../../../components/avatar/demo/index.vue'),
  },
  {
    path: 'badge:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Badge',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*e0qITYqF394AAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*v8EQT7KoGbcAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '徽标数',
    },
    component: () => import('../../../components/badge/demo/index.vue'),
  },
  {
    path: 'breadcrumb:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '导航',
      title: 'Breadcrumb',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*I5a2Tpqs3y0AAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Tr90QKrE_LcAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '面包屑',
    },
    component: () => import('../../../components/breadcrumb/demo/index.vue'),
  },
  {
    path: 'button:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '通用',
      title: 'Button',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*BrFMQ5s7AAQAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Lp1kTYmSsgoAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '按钮',
    },
    component: () => import('../../../components/button/demo/index.vue'),
  },
  {
    path: 'calendar:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Calendar',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*nF6_To7pDSAAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*-p-wQLik200AAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '日历',
    },
    component: () => import('../../../components/calendar/demo/index.vue'),
  },
  {
    path: 'card:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Card',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*VXtCTp93KPAAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*a-8zR6rrupgAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '卡片',
    },
    component: () => import('../../../components/card/demo/index.vue'),
  },
  {
    path: 'carousel:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Carousel',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*bPMSSqbaTMkAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*a-58QpYnqOsAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '走马灯',
    },
    component: () => import('../../../components/carousel/demo/index.vue'),
  },
  {
    path: 'cascader:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据录入',
      title: 'Cascader',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*tokLTp73TsQAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*5-ArSLl5UBsAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '级联选择',
    },
    component: () => import('../../../components/cascader/demo/index.vue'),
  },
  {
    path: 'checkbox:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据录入',
      title: 'Checkbox',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*DzgiRbW3khIAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*G3MjTYXL6AIAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '多选框',
    },
    component: () => import('../../../components/checkbox/demo/index.vue'),
  },
  {
    path: 'collapse:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Collapse',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*B7HKR5OBe8gAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*sir-TK0HkWcAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '折叠面板',
    },
    component: () => import('../../../components/collapse/demo/index.vue'),
  },
  {
    path: 'comment:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Comment',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/ILhxpGzBO/Comment.svg',
      subtitle: '评论',
    },
    component: () => import('../../../components/comment/demo/index.vue'),
  },
  {
    path: 'config-provider:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '其他',
      cols: 1,
      title: 'ConfigProvider',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*NVKORa7BCVwAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*YC4ERpGAddoAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '全局化配置',
    },
    component: () => import('../../../components/config-provider/demo/index.vue'),
  },
  {
    path: 'date-picker:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据录入',
      title: 'DatePicker',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xXA9TJ8BTioAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*3OpRQKcygo8AAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '日期选择框',
    },
    component: () => import('../../../components/date-picker/demo/index.vue'),
  },
  {
    path: 'descriptions:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Descriptions',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*fHdlTpif6XQAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*d27AQJrowGAAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '描述列表',
    },
    component: () => import('../../../components/descriptions/demo/index.vue'),
  },
  {
    path: 'divider:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '布局',
      title: 'Divider',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7sMiTbzvaDoAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KPSEQ74PLg4AAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '分割线',
    },
    component: () => import('../../../components/divider/demo/index.vue'),
  },
  {
    path: 'drawer:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '反馈',
      title: 'Drawer',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*v3TvSq2E0HAAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*4wzwRIBLuqEAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '抽屉',
    },
    component: () => import('../../../components/drawer/demo/index.vue'),
  },
  {
    path: 'dropdown:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '导航',
      title: 'Dropdown',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*mBBcQ6goljkAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*5qm4S4Zgh2QAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '下拉菜单',
    },
    component: () => import('../../../components/dropdown/demo/index.vue'),
  },
  {
    path: 'empty:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Empty',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ZdiZSLzEV0wAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*obM7S5lIxeMAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '空状态',
    },
    component: () => import('../../../components/empty/demo/index.vue'),
  },
  {
    path: 'flex:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '布局',
      title: 'Flex',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*SMzgSJZE_AwAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*8yArQ43EGccAAAAAAAAAAAAADrJ8AQ/original',
      tag: 'New',
      subtitle: '弹性布局',
    },
    component: () => import('../../../components/flex/demo/index.vue'),
  },
  {
    path: 'float-button:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '其他',
      title: 'FloatButton',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*HS-wTIIwu0kAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*a0hwTY_rOSUAAAAAAAAAAAAADrJ8AQ/original',
      tag: 'New',
      subtitle: '悬浮按钮',
    },
    component: () => import('../../../components/float-button/demo/index.vue'),
  },
  {
    path: 'form:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据录入',
      cols: 1,
      title: 'Form',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*-lcdS5Qm1bsAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ylFATY6w-ygAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '表单',
    },
    component: () => import('../../../components/form/demo/index.vue'),
  },
  {
    path: 'grid:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '布局',
      cols: 1,
      title: 'Grid',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*mfJeS6cqZrEAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*DLUwQ4B2_zQAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '栅格',
    },
    component: () => import('../../../components/grid/demo/index.vue'),
  },
  {
    path: 'icon:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '通用',
      title: 'Icon',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*PdAYS7anRpoAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xEDOTJx2DEkAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '图标',
    },
    component: () => import('../../../components/icon/demo/index.vue'),
  },
  {
    path: 'image:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Image',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*FbOCS6aFMeUAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*LVQ3R5JjjJEAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '图片',
    },
    component: () => import('../../../components/image/demo/index.vue'),
  },
  {
    path: 'input:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据录入',
      title: 'Input',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Y3R0RowXHlAAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*sBqqTatJ-AkAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '输入框',
    },
    component: () => import('../../../components/input/demo/index.vue'),
  },
  {
    path: 'input-number:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据录入',
      title: 'InputNumber',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JvWbSYhuNlIAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*1uH-R5kLAMIAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '数字输入框',
    },
    component: () => import('../../../components/input-number/demo/index.vue'),
  },
  {
    path: 'layout:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '布局',
      cols: 1,
      title: 'Layout',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*4i58ToAcxaYAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*HdS6Q5vUCDcAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '布局',
    },
    component: () => import('../../../components/layout/demo/index.vue'),
  },
  {
    path: 'list:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'List',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*EYuhSpw1iSwAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*tBzwQ7raKX8AAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '列表',
    },
    component: () => import('../../../components/list/demo/index.vue'),
  },
  {
    path: 'mentions:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据录入',
      title: 'Mentions',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*e4bXT7Uhi9YAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*pxR2S53P_xoAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '提及',
    },
    component: () => import('../../../components/mentions/demo/index.vue'),
  },
  {
    path: 'menu:lang(-cn)?',
    meta: {
      category: 'Components',
      cols: 1,
      type: '导航',
      title: 'Menu',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KeyQQL5iKkkAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Vn4XSqJFAxcAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '导航菜单',
    },
    component: () => import('../../../components/menu/demo/index.vue'),
  },
  {
    path: 'message:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '反馈',
      title: 'Message',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JjZBT6N1MusAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7qMTRoq3ZGkAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '全局提示',
    },
    component: () => import('../../../components/message/demo/index.vue'),
  },
  {
    path: 'modal:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '反馈',
      title: 'Modal',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*wM3qQ5XrhlcAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*fBrgSJBmavgAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '对话框',
    },
    component: () => import('../../../components/modal/demo/index.vue'),
  },
  {
    path: 'notification:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '反馈',
      title: 'Notification',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*6RWNQ78WtvEAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*9hTIToR-3YYAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '通知提醒框',
    },
    component: () => import('../../../components/notification/demo/index.vue'),
  },
  {
    path: 'page-header:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '导航',
      title: 'PageHeader',
      cols: 1,
      subtitle: '页头',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/6bKE0Cq0R/PageHeader.svg',
    },
    component: () => import('../../../components/page-header/demo/index.vue'),
  },
  {
    path: 'pagination:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '导航',
      title: 'Pagination',
      cols: 1,
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*8y_iTJGY_aUAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*WM86SrBC8TsAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '分页',
    },
    component: () => import('../../../components/pagination/demo/index.vue'),
  },
  {
    path: 'popconfirm:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '反馈',
      title: 'Popconfirm',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*sAGpRoBtTXcAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*HrFtQ6jJJFQAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '气泡确认框',
    },
    component: () => import('../../../components/popconfirm/demo/index.vue'),
  },
  {
    path: 'popover:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Popover',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*XhL3QpRw92kAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*RMP_TrdZ3nsAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '气泡卡片',
    },
    component: () => import('../../../components/popover/demo/index.vue'),
  },
  {
    path: 'progress:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '反馈',
      title: 'Progress',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*gK_4S6fDRfgAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*HJH8Tb1lcYAAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '进度条',
    },
    component: () => import('../../../components/progress/demo/index.vue'),
  },
  {
    path: 'qrcode:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'QRCode',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*cJopQrf0ncwAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*M4PBTZ_n9OgAAAAAAAAAAAAADrJ8AQ/original',
      tag: 'New',
      subtitle: '二维码',
    },
    component: () => import('../../../components/qrcode/demo/index.vue'),
  },
  {
    path: 'radio:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据录入',
      title: 'Radio',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*M-YKTJnWM2kAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*a9roS6DHFIcAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '单选框',
    },
    component: () => import('../../../components/radio/demo/index.vue'),
  },
  {
    path: 'rate:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据录入',
      title: 'Rate',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*oyOcTrB12_YAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*M7_ER7GJr6wAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '评分',
    },
    component: () => import('../../../components/rate/demo/index.vue'),
  },
  {
    path: 'result:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '反馈',
      title: 'Result',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*-e2IRroDJyEAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*-0kxQrbHx2kAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '结果',
    },
    component: () => import('../../../components/result/demo/index.vue'),
  },
  {
    path: 'segmented:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Segmented',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*papwTpNscPIAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*tz7qSaWpi1kAAAAAAAAAAAAADrJ8AQ/original',
      tag: 'New',
      subtitle: '分段控制器',
    },
    component: () => import('../../../components/segmented/demo/index.vue'),
  },
  {
    path: 'select:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据录入',
      title: 'Select',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*zo76T7KQx2UAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*5oPiTqPxGAUAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '选择器',
    },
    component: () => import('../../../components/select/demo/index.vue'),
  },
  {
    path: 'skeleton:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '反馈',
      title: 'Skeleton',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*uae3QbkNCm8AAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*VcjGQLSrYdcAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '骨架屏',
    },
    component: () => import('../../../components/skeleton/demo/index.vue'),
  },
  {
    path: 'slider:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据录入',
      title: 'Slider',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*_4heQaUrFn4AAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*XkgXTaudeosAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '滑动输入条',
    },
    component: () => import('../../../components/slider/demo/index.vue'),
  },
  {
    path: 'space:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '布局',
      title: 'Space',
      cols: 1,
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ZiJ3SbOH9SUAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*37T2R6O9oi0AAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '间距',
    },
    component: () => import('../../../components/space/demo/index.vue'),
  },
  {
    path: 'spin:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '反馈',
      title: 'Spin',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*5mC5TomY4B0AAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*i43_ToFrL8YAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '加载中',
    },
    component: () => import('../../../components/spin/demo/index.vue'),
  },
  {
    path: 'statistic:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Statistic',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*YL7PRYNtH-4AAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*BPWDRbSYxJ4AAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '统计数值',
    },
    component: () => import('../../../components/statistic/demo/index.vue'),
  },
  {
    path: 'steps:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '导航',
      cols: 1,
      title: 'Steps',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*677sTqCpE3wAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*cFsBQLA0b7UAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '步骤条',
    },
    component: () => import('../../../components/steps/demo/index.vue'),
  },
  {
    path: 'switch:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据录入',
      title: 'Switch',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*rtArRpBNDZcAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*al07RK8SGf4AAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '开关',
    },
    component: () => import('../../../components/switch/demo/index.vue'),
  },
  {
    path: 'table:lang(-cn)?',
    meta: {
      category: 'Components',
      cols: 1,
      type: '数据展示',
      title: 'Table',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*3yz3QqMlShYAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Sv8XQ50NB40AAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '表格',
    },
    component: () => import('../../../components/table/demo/index.vue'),
  },
  {
    path: 'tabs:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Tabs',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*72NDQqXkyOEAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*8HMoTZUoSGoAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '标签页',
    },
    component: () => import('../../../components/tabs/demo/index.vue'),
  },
  {
    path: 'tag:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Tag',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*_SBsSrKLg00AAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JPNAQYrVkYkAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '标签',
    },
    component: () => import('../../../components/tag/demo/index.vue'),
  },
  {
    path: 'time-picker:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据录入',
      title: 'TimePicker',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*kGmGSLk_1fwAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*1hDmQJIDFJQAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '时间选择框',
    },
    component: () => import('../../../components/time-picker/demo/index.vue'),
  },
  {
    path: 'timeline:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Timeline',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*FkTySqNt3sYAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*yIl9S4hAIBcAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '时间轴',
    },
    component: () => import('../../../components/timeline/demo/index.vue'),
  },
  {
    path: 'tooltip:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Tooltip',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*3u9eSZO_4c0AAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*gwrhTozoTC4AAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '文字提示',
    },
    component: () => import('../../../components/tooltip/demo/index.vue'),
  },
  {
    path: 'tour:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Tour',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*8CC_Tbe3_e4AAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*nF6hQpM0XtEAAAAAAAAAAAAADrJ8AQ/original',
      tag: 'New',
      subtitle: '漫游式引导',
    },
    component: () => import('../../../components/tour/demo/index.vue'),
  },
  {
    path: 'transfer:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据录入',
      title: 'Transfer',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*EAApQ5ephigAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*yv12S4sSRAEAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '穿梭框',
    },
    component: () => import('../../../components/transfer/demo/index.vue'),
  },
  {
    path: 'tree:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Tree',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Ag9_Q6ArswEAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*1GeUQJPTGUYAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '树形控件',
    },
    component: () => import('../../../components/tree/demo/index.vue'),
  },
  {
    path: 'tree-select:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据录入',
      title: 'TreeSelect',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*DfTMRYSDngEAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Y5pcQLplFu4AAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '树选择',
    },
    component: () => import('../../../components/tree-select/demo/index.vue'),
  },
  {
    path: 'typography:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '通用',
      title: 'Typography',
      cols: 1,
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*MLt3R6m9huoAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*LT2jR41Uj2EAAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '排版',
    },
    component: () => import('../../../components/typography/demo/index.vue'),
  },
  {
    path: 'upload:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '数据录入',
      title: 'Upload',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*93ymR4RD4S0AAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*l1nlSryXib8AAAAAAAAAAAAADrJ8AQ/original',
      subtitle: '上传',
    },
    component: () => import('../../../components/upload/demo/index.vue'),
  },
  {
    path: 'watermark:lang(-cn)?',
    meta: {
      category: 'Components',
      type: '其他',
      title: 'Watermark',
      cover:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*wr1ISY50SyYAAAAAAAAAAAAADrJ8AQ/original',
      coverDark:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*duAQQbjHlHQAAAAAAAAAAAAADrJ8AQ/original',
      tag: 'New',
      subtitle: '水印',
    },
    component: () => import('../../../components/watermark/demo/index.vue'),
  },
];
