export default {
  common: {
    server: '服务',
    database: '数据库',
    table: '数据表',
    execute: '执行',
    cancel: '取消',
    ok: '确认',
    quick: 'Quick',
    quick_query: '快速查询',
    test_connection: '测试连接',
    alias_name: '别名',
    name: '名称',
    host: '主机',
    port: '端口',
    username: '用户名',
    password: '密码',
    beta: '测试版',
    setting: '设置',
    switch: '切换为中文！',
    save: '保存',
    basic: '基础',
    network: '网络',
    timeout: '超时',
    monitor: '监控',
    new: '新',
    processor: '进程',
    setting_connection: '连接设置',
    advanced_connection: '高级设置',
    time: '时间',
    rows: '行数',
    elapsed: '消耗',
    bytes: '字节',
    memoryUsage: '占用内存',
    bytesRead: '读取字节数',
    bytesWritten: '写入字节数',
    hash: 'Hash值',
    threshold: '阈值',
    auto: '自动',
    refresh: '刷新',
    count: '总数',
    action: '操作',
    ddl: 'DDL',
    kill: '结束',
    no_callback: '不可回滚',
    necessary: '必要',
    success: '成功',
    error: '失败',
    add: '添加',
    datasource: '数据源',
    status: '状态',
    delete: '删除',
    query: '查询',
    history: '历史',
    clear: '清除',
    notification: '通知',
    connection: '连接',
    copy: '复制',
    format: '格式化',
    editor: '编辑器',
    theme: '主题',
    activeLine: '高亮激活行',
    yes: '是',
    no: '否',
    showLine: '显示行',
    reload: '重新加载',
    result: '结果',
    select: '选择',
    protocol: '协议',
    mutations: 'Mutations',
    id: 'ID',
    createTime: '创建时间',
    information: '信息',
    edit: '修改',
    tools: '工具',
    track: 'Track',
    thread: '线程',
    type: '类型',
    next: '下一步',
    preview: '预览',
    configuration: '配置',
    previous: '上一步',
    log: '日志',
    column: '列',
    property: '属性',
    comment: '描述',
    migrate: '迁移',
    source: '源',
    target: '目标',
    clickhouse: 'ClickHouse',
    language: '语言',
    uppercase: '大写',
    engine: '引擎',
    kafka: 'Kafka',
    broker: 'Broker',
    topic: '主题',
    group: '组',
    hdfs: 'HDFS',
    uri: 'URI',
    rename: '重命名'
  },
  prompt: {
    component: {
      warning_drop: '数据源中禁止删除操作<br/>如果需要恢复，请修改数据源配置'
    }
  },
  router: {
    index: '主页',
    query: '查询',
    data: {
      source: '数据源',
      metadata: '元数据',
      table: {
        detail: '表详情'
      }
    }
  },
  view: {
    component: {
      data: {
        source: {
          placeholder: {
            alias_name: '请输入别名',
            host: '请输入远程主机',
            port: '请输入远程主机的端口',
            username: '请输入远程主机的用户名',
            password: '请输入远程主机的用户密码'
          },
          tooltip: {
            alias_name: '此字段仅用于标记当前属性的别名<br/>该属性易于记忆，没有特殊意义',
            host: '在此处输入远程服务器的主机名或IP地址',
            port: '在此处输入远程服务器的主机地址，对应于打开的端口'
          },
          title: {
            warning_drop: '禁止DROP操作（仅支持查询）'
          }
        }
      },
      setting: {
        basic: {
          placeholder: {
            network: '请输入网络连接的超时时间'
          },
          tooltip: {
            network: '访问远程服务器超时时间，默认是秒'
          }
        }
      }
    }
  },
  alter: {
    operation: '我们不建议您执行此操作',
    operation_submit: '如果您要继续后续操作，请在可输入的输入框中输入必要的信息，点击OK或者确认按钮！',
    result: '此操作产生以下结果:',
    stop_on_cluster: '这将会停止在集群中的操作',
    contrast_input: '输入的值和必要值不一致',
    are_you_delete: '确定要删除吗?',
    service_not_available: '当前服务不可用。请检查配置或将其删除!',
    service_available: '当前服务可用于查询或其他操作!',
    refersh_config: '配置修改后需要手动重新载入!'
  },
  tooltip: {
    is_empty: '是否非空',
    history_max: '查询历史超过系统最大限制将不再保存'
  },
  formatter: {
    column: '表引擎{0}不支持ALTER操作'
  },
  table: {
    engine: {
      log: {
        name: 'Log',
        tiny: 'TinyLog',
        stripe: 'StripeLog',
        description: '具有最小功能的轻量级引擎。当您需要快速地编写许多小表(最多可达100万行)并在稍后整体读取它们时，它们是最有效的。'
      },
      integration: {
        name: 'Integration',
        description: '主要用于将外部数据导入到ClickHouse中，或者在ClickHouse中直接操作外部数据源',
        kafka: {
          name: 'Kafka',
          description: '将Kafka Topic中的数据直接导入到ClickHouse'
        },
        hdfs: {
          name: 'HDFS',
          description: '将HDFS中的数据直接导入到ClickHouse'
        }
      }
    }
  }
}
