mui.plusReady(function() {

	var main = plus.webview.getLaunchWebview()
	var current = plus.webview.currentWebview()
	var list = plus.webview.getWebviewById('list')
	console.log(list.parent().getTitle())
	console.log(list.opener)
	console.log(main.getTitle())
	console.log(current.getTitle())
	console.log(list.getTitle())
	plus.webview.hide(current);
	// 打开设置页面
	document.querySelector('#settings').addEventListener('tap', function(e) {
		mui.openWindow({
			url: 'views/settings.html',
			id: 'settings.html',
			styles: {},
			extras: {
				//自定义扩展参数，可以用来处理页面间传值
			},
			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			show: {
				autoShow: true, //页面loaded事件发生后自动显示，默认为true
			},
			waiting: {
				autoShow: true, //自动显示等待框，默认为true
				title: '正在加载...', //等待对话框上显示的提示内容
				options: {}
			}
		})
	});


	// 打开招聘页面

	mui('#job')[0].addEventListener('tap', function() {
		var job_list = plus.webview.create('home.html', 'job-list', {
			top: 46,
			bottom: 0
		}, {
			type: 'excellent',
			node_id: 25
		});
		plus.webview.hide( list )
		console.log(job_list)
		main.append(job_list)
		list.close()
//		list.removeFromParent()
//		list.hide()
		console.log(list.isVisible())
		job_list.show
     	

			//		mui.openWindow({
			//			url: 'home.html',
			//			id: 'settings.html',
			//			styles: {},
			//			extras: {
			//				type: 'excellent',
			//				node_id: 25
			//			},
			//			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			//			show: {
			//				autoShow: true, //页面loaded事件发生后自动显示，默认为true
			//			},
			//			waiting: {
			//				autoShow: true, //自动显示等待框，默认为true
			//				title: '正在加载...', //等待对话框上显示的提示内容
			//				options: {}
			//			}
			//		})
	})


	/** * 关闭侧滑菜单 */
	function close() {
		mui.fire(mui.currentWebview.opener(), "menu:close");
	}
	//监听左滑事件，若菜单已展开，左滑要关闭菜单；
	window.addEventListener("swipeleft", function(e) {
		console.log('ssss')
		console.log(Math.abs(e.detail.angle))
		if (Math.abs(e.detail.angle) > 170) {
			close();
		}
	});



})