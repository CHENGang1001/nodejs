{
	"code": 0,
	"msg": "",
	"data": [{
		"title": "概览",
		"icon": "layui-icon-template-1",
		"spread": "true",
		"list": [{
			"name": "runMessage",
			"title": "运行信息",
			"jump": "user/runMessage"
		}, {
			"name": "faultMessage",
			"title": "故障信息",
			"jump": "user/faultMessage"
		}]
	}, {
		"name": "systemSetting",
		"title": "系统",
		"icon": "layui-icon-set-fill",
		"list": [{
			"name": "basicParams",
			"title": "基本参数",
			"list": [{
				"name": "systemTime",
				"title": "系统时间",
				"jump": "settings/base/systemtime"
			}, {
				"name": "plantMessage",
				"title": "电站信息",
                "jump": "settings/base/stationinfo"
			}]
		}, {
			"name": "basicParams",
			"title": "端口参数",
			"list": [{
				"name": "RS485",
				"title": "RS485",
                "jump": "settings/ports/RS485"
			}, {
				"name": "internet",
				"title": "以太网",
                "jump": "settings/ports/ethernet"
			}, {
				"name": "4G",
				"title": "4G",
                "jump": "settings/ports/4g"
			}, {
				"name": "WIFT",
				"title": "WIFT",
                "jump": "settings/ports/wifi"
			}, {
				"name": "internetManager",
				"title": "网络管理",
                "jump": "settings/ports/managernet"
			}]
		}, {
			"name": "protocolParams",
			"title": "协议参数",
			"list": [{
				"name": "modbus",
				"title": "MODUBUS",
                "jump": "settings/agreements/MODBUS"
			}, {
				"name": "iec104",
				"title": "IEC104",
                "jump": "settings/agreements/IEC104"
			}, {
				"name": "mqtt",
				"title": "MQTT",
                "jump": "settings/agreements/MQTT"
			}]
		}]
	}, {
		"name": "deviceManager",
		"title": "设备",
		"icon": "layui-icon-layer",
		"jump": "user/deviceManager"
	}, {
		"name": "historyData",
		"title": "历史数据",
		"icon": "layui-icon-find-fill",
		"list": [

			{
				"name": "addresslist",
				"title": "操作日志",
				"jump": "user/operationMessage"
			}

		]
	}, {
		"name": "gridDispatching",
		"title": "电网调度",
		"icon": "layui-icon-engine",
		"list": [{
			"name": "activePower",
			"title": "有功功率",
			"jump": "user/activePower"
		}, {
			"name": "reactivePower",
			"title": "无功功率",
			"jump": "user/reactivePower"
		}]
	}, {
		"name": "maintain",
		"title": "维护",
		"icon": "layui-icon-util",
		"list": [{
			"name": "deviceMaintenance",
			"title": "设备维护",
			"list": [{
				"name": "deviceAccess",
				"title": "设备接入",
				"jump": "senior/echarts/bar"
			}, {
				"name": "deviceTable",
				"title": "设备列表",
				"jump": "set/user/password"
			}, {
				"name": "deviceUpgrade",
				"title": "设备升级",
				"jump": "set/user/info"
			}, {
				"name": "deviceLog",
				"title": "设备日志",
				"jump": "set/system/website"
			}]
		}, {
			"name": "systemMaintenance",
			"title": "系统维护",
			"list": [{
				"name": "systemUpgrade",
				"title": "系统升级",
				"jump": "set/system/email"
			}, {
				"name": "systemLog",
				"title": "系统日志",
				"jump": "system/theme"
			}, {
				"name": "system/more",
				"title": "系统维护",
				"jump": "system/get"
			}]
		}]

	}, {
		"name": "About",
		"title": "关于",
		"icon": "layui-icon-about",
		"jump": "system/about"
	}]
}