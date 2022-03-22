function addSwitcher()
{
	var dzSwitcher = '<div class="sidebar-right"><div class="bg-overlay"></div> <a class="sidebar-right-trigger wave-effect wave-effect-x" data-toggle="tooltip" data-placement="right" data-original-title="Change Layout Models" href="javascript:void(0);"><span><i class="fa fa-empire" aria-hidden="true"></i></span></a> <a class="sidebar-close-trigger" href="javascript:void(0);"><span><i class="la-times las"></i></span></a><div class="sidebar-right-inner"><h4>Transformers Models<a href="javascript:void(0);" onclick="deleteAllCookie()" class="btn btn-primary btn-sm pull-right" style="box-shadow: 2px 12px 26px 3px rgb(104 254 154 / 0%);">Delete All Cookie</a></h4><div class="card-tabs"><ul class="nav nav-tabs" role="tablist"><li class="nav-item"><a class="nav-link active" href="#themes" data-toggle="tab">Themes</a></li><li class="nav-item"><a class="nav-link" href="#header" data-toggle="tab">Header</a></li><li class="nav-item"><a class="nav-link" href="#container" data-toggle="tab">Content</a></li></ul></div><div class="tab-content tab-content-default tabcontent-border"><div class="fade tab-pane active show" id="themes"><div class="admin-settings"><div class="row"><div class="col-sm-12"><p>Appearance Models</p> <select class="default-select form-control" id="theme_version" name="theme_version"><option value="light">Light Model</option><option value="dark">Dark Model</option> </select></div><div class="col-sm-6"><p>Primary Colors</p><div> <span data-placement="top" data-toggle="tooltip" title="Color 1"> <input class="chk-col-primary filled-in" id="primary_color_1" name="primary_bg" type="radio" value="color_1"> <label for="primary_color_1" class="bg-label-pattern"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_2" name="primary_bg" type="radio" value="color_2"> <label for="primary_color_2"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_3" name="primary_bg" type="radio" value="color_3"> <label for="primary_color_3"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_4" name="primary_bg" type="radio" value="color_4"> <label for="primary_color_4"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_5" name="primary_bg" type="radio" value="color_5"> <label for="primary_color_5"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_6" name="primary_bg" type="radio" value="color_6"> <label for="primary_color_6"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_7" name="primary_bg" type="radio" value="color_7"> <label for="primary_color_7"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_9" name="primary_bg" type="radio" value="color_9"> <label for="primary_color_9"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_10" name="primary_bg" type="radio" value="color_10"> <label for="primary_color_10"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_11" name="primary_bg" type="radio" value="color_11"> <label for="primary_color_11"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_12" name="primary_bg" type="radio" value="color_12"> <label for="primary_color_12"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_13" name="primary_bg" type="radio" value="color_13"> <label for="primary_color_13"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_14" name="primary_bg" type="radio" value="color_14"> <label for="primary_color_14"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_15" name="primary_bg" type="radio" value="color_15"> <label for="primary_color_15"></label> </span></div></div><div class="col-sm-6"><p>LTR Navigation Header</p><div> <span> <input class="chk-col-primary filled-in" id="nav_header_color_1" name="navigation_header" type="radio" value="color_1"> <label for="nav_header_color_1" class="bg-label-pattern"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_2" name="navigation_header" type="radio" value="color_2"> <label for="nav_header_color_2"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_3" name="navigation_header" type="radio" value="color_3"> <label for="nav_header_color_3"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_4" name="navigation_header" type="radio" value="color_4"> <label for="nav_header_color_4"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_5" name="navigation_header" type="radio" value="color_5"> <label for="nav_header_color_5"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_6" name="navigation_header" type="radio" value="color_6"> <label for="nav_header_color_6"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_7" name="navigation_header" type="radio" value="color_7"> <label for="nav_header_color_7"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_8" name="navigation_header" type="radio" value="color_8"> <label for="nav_header_color_8" class="border"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_9" name="navigation_header" type="radio" value="color_9"> <label for="nav_header_color_9"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_10" name="navigation_header" type="radio" value="color_10"> <label for="nav_header_color_10"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_11" name="navigation_header" type="radio" value="color_11"> <label for="nav_header_color_11"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_12" name="navigation_header" type="radio" value="color_12"> <label for="nav_header_color_12"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_13" name="navigation_header" type="radio" value="color_13"> <label for="nav_header_color_13"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_14" name="navigation_header" type="radio" value="color_14"> <label for="nav_header_color_14"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_15" name="navigation_header" type="radio" value="color_15"> <label for="nav_header_color_15"></label> </span></div></div><div class="col-sm-6"><p>RTL Navigation Header</p><div> <span> <input class="chk-col-primary filled-in" id="header_color_1" name="header_bg" type="radio" value="color_1"> <label for="header_color_1" class="bg-label-pattern"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_2" name="header_bg" type="radio" value="color_2"> <label for="header_color_2"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_3" name="header_bg" type="radio" value="color_3"> <label for="header_color_3"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_4" name="header_bg" type="radio" value="color_4"> <label for="header_color_4"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_5" name="header_bg" type="radio" value="color_5"> <label for="header_color_5"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_6" name="header_bg" type="radio" value="color_6"> <label for="header_color_6"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_7" name="header_bg" type="radio" value="color_7"> <label for="header_color_7"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_8" name="header_bg" type="radio" value="color_8"> <label for="header_color_8" class="border"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_9" name="header_bg" type="radio" value="color_9"> <label for="header_color_9"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_10" name="header_bg" type="radio" value="color_10"> <label for="header_color_10"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_11" name="header_bg" type="radio" value="color_11"> <label for="header_color_11"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_12" name="header_bg" type="radio" value="color_12"> <label for="header_color_12"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_13" name="header_bg" type="radio" value="color_13"> <label for="header_color_13"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_14" name="header_bg" type="radio" value="color_14"> <label for="header_color_14"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_15" name="header_bg" type="radio" value="color_15"> <label for="header_color_15"></label> </span></div></div><div class="col-sm-6"><p>LTR Sidebar Models</p><div> <span> <input class="chk-col-primary filled-in" id="sidebar_color_1" name="sidebar_bg" type="radio" value="color_1"> <label for="sidebar_color_1" class="bg-label-pattern"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_2" name="sidebar_bg" type="radio" value="color_2"> <label for="sidebar_color_2"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_3" name="sidebar_bg" type="radio" value="color_3"> <label for="sidebar_color_3"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_4" name="sidebar_bg" type="radio" value="color_4"> <label for="sidebar_color_4"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_5" name="sidebar_bg" type="radio" value="color_5"> <label for="sidebar_color_5"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_6" name="sidebar_bg" type="radio" value="color_6"> <label for="sidebar_color_6"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_7" name="sidebar_bg" type="radio" value="color_7"> <label for="sidebar_color_7"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_8" name="sidebar_bg" type="radio" value="color_8"> <label for="sidebar_color_8" class="border"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_9" name="sidebar_bg" type="radio" value="color_9"> <label for="sidebar_color_9"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_10" name="sidebar_bg" type="radio" value="color_10"> <label for="sidebar_color_10"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_11" name="sidebar_bg" type="radio" value="color_11"> <label for="sidebar_color_11"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_12" name="sidebar_bg" type="radio" value="color_12"> <label for="sidebar_color_12"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_13" name="sidebar_bg" type="radio" value="color_13"> <label for="sidebar_color_13"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_14" name="sidebar_bg" type="radio" value="color_14"> <label for="sidebar_color_14"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_15" name="sidebar_bg" type="radio" value="color_15"> <label for="sidebar_color_15"></label> </span></div></div></div></div></div><div class="fade tab-pane" id="header"><div class="admin-settings"><div class="row"><div class="col-sm-6"><p>Layout Models</p> <select class="default-select form-control" id="theme_layout" name="theme_layout"><option value="vertical">Vertical Model</option><option value="horizontal">Horizontal Model</option> </select></div><div class="col-sm-6"><p>Header Position</p> <select class="default-select form-control" id="header_position" name="header_position"><option value="static">Static Model</option><option value="fixed">Fixed Model</option></select></div><div class="col-sm-6"><p>Sidebar Models</p> <select class="default-select form-control" id="sidebar_style" name="sidebar_style"><option value="full">Full Model</option><option value="mini">Mini Model</option><option value="compact">Compact Model</option><option value="modern">Modern Model</option><option value="overlay">Overlay Model</option><option value="icon-hover">Icon-Hover Model</option> </select></div><div class="col-sm-6"><p>Sidebar Position</p> <select class="default-select form-control" id="sidebar_position" name="sidebar_position"><option value="static">Static Model</option><option value="fixed">Fixed Model</option> </select></div></div></div></div><div class="fade tab-pane" id="container"><div class="admin-settings"><div class="row"><div class="col-sm-6"><p>Container Models</p> <select class="default-select form-control" id="container_layout" name="container_layout"><option value="wide">Wide Model</option><option value="boxed">Boxed Model</option><option value="wide-boxed">Wide Boxed Model</option> </select></div><div class="col-sm-6"><p>Direction Models</p> <select class="default-select form-control" id="theme_direction" name="theme_direction"><option value="ltr">LTR Model</option><option value="rtl">RTL Model</option> </select></div><div class="col-sm-6"><p>Font Models</p> <select class="default-select form-control" id="typography" name="typography"><option value="roboto">Roboto</option><option value="poppins">Poppins</option><option value="opensans">Open Sans</option><option value="HelveticaNeue">HelveticaNeue</option> </select></div></div></div></div></div></div></div>';
	

	var Panel = '<div class="dz-demo-panel"><div class="bg-close"></div><a class="dz-demo-trigger" data-toggle="tooltip" data-placement="right" data-original-title="Check out more demos" href="javascript:void(0)"><span><i class="las la-tint"></i></span></a><div class="dz-demo-inner"><a href="javascript:void(0);" class="btn btn-primary btn-sm px-2 py-1 mb-3" onclick="deleteAllCookie()">Delete All Cookie</a><div class="dz-demo-header"><h4>Select A Demo</h4><a class="dz-demo-close" href="javascript:void(0)"><span><i class="las la-times"></i></span></a></div><div class="dz-demo-content"><div class="dz-wrapper"><div class="overlay-bx rounded-lg dz-demo-bx demo-active"><div class="overlay-wrapper rounded-lg"><h1>1</h1></div><div class="overlay-layer"><a href="javascript:void(0);" data-theme="1" class="btn dz_theme_demo btn-secondary btn-sm mr-2">Default</a><a href="javascript:void(0);" data-theme="1" class="btn dz_theme_demo_rtl btn-info btn-sm">RTL Version</a></div></div><h5 class="text-black">Demo 1</h5><hr><div class="overlay-bx rounded-lg dz-demo-bx"><div class="overlay-wrapper rounded-lg"><h1>2</h1></div><div class="overlay-layer"><a href="javascript:void(0);" data-theme="2" class="btn dz_theme_demo btn-secondary btn-sm mr-2">Default</a><a href="javascript:void(0);" data-theme="2" class="btn dz_theme_demo_rtl btn-info btn-sm">RTL Version</a></div></div><h5 class="text-black">Demo 2</h5><hr><div class="overlay-bx rounded-lg dz-demo-bx"><div class="overlay-wrapper rounded-lg"><h1>3</h1></div><div class="overlay-layer"><a href="javascript:void(0);" data-theme="3" class="btn dz_theme_demo btn-secondary btn-sm mr-2">Default</a><a href="javascript:void(0);" data-theme="3" class="btn dz_theme_demo_rtl btn-info btn-sm">RTL Version</a></div></div><h5 class="text-black">Demo 3</h5><hr><div class="overlay-bx rounded-lg dz-demo-bx"><div class="overlay-wrapper rounded-lg"><h1>4</h1></div><div class="overlay-layer"><a href="javascript:void(0);" data-theme="4" class="btn dz_theme_demo btn-secondary btn-sm mr-2">Default</a><a href="javascript:void(0);" data-theme="4" class="btn dz_theme_demo_rtl btn-info btn-sm">RTL Version</a></div></div><h5 class="text-black">Demo 4</h5><div class="overlay-bx rounded-lg dz-demo-bx"><div class="overlay-wrapper rounded-lg"><h1>5</h1></div><div class="overlay-layer"><a href="javascript:void(0);" data-theme="5" class="btn dz_theme_demo btn-secondary btn-sm mr-2">Default</a><a href="javascript:void(0);" data-theme="5" class="btn dz_theme_demo_rtl btn-info btn-sm">RTL Version</a></div></div><h5 class="text-black">Demo 5</h5></div></div><div class="fs-12 pt-3"><span class="text-danger">*Note :</span> This theme switcher is not part of product. It is only for demo. you will get all guideline in documentation. please check <a href="javascript:void(0);" class="text-primary">documentation.</a></div></div></div>';
	if($("#dzSwitcher").length == 0) {
		jQuery('body').append(dzSwitcher + Panel);
		
			
		 //const ps = new PerfectScrollbar('.sidebar-right-inner');
		 //console.log(ps.reach.x);	
			//ps.isRtl = false;
				
		  $('.sidebar-right-trigger').on('click', function() {
				$('.sidebar-right').toggleClass('show');
		  });
		  $('.sidebar-close-trigger,.bg-overlay').on('click', function() {
				$('.sidebar-right').removeClass('show');
		  });
	}
}

(function($) {
    "use strict"
	addSwitcher();

	
    const body = $('body');
    const html = $('html');

    //get the DOM elements from right sidebar
    const typographySelect = $('#typography');
    const versionSelect = $('#theme_version');
    const layoutSelect = $('#theme_layout');
    const sidebarStyleSelect = $('#sidebar_style');
    const sidebarPositionSelect = $('#sidebar_position');
    const headerPositionSelect = $('#header_position');
    const containerLayoutSelect = $('#container_layout');
    const themeDirectionSelect = $('#theme_direction');

    //change the theme typography controller
    typographySelect.on('change', function() {
        body.attr('data-typography', this.value);
		
		setCookie('typography', this.value);
    });

    //change the theme version controller
    versionSelect.on('change', function() {
		body.attr('data-theme-version', this.value);
		
		if(this.value === 'light'){
			jQuery(".nav-header .logo-abbr").attr("src", "/ServerlessEngine/OpenAPIs/PaaS/WeCloudDance/static/assets/resource/common/products/WeCloudDance_small_sign-v2.svg");
			jQuery(".nav-header .logo-compact").attr("src", "/ServerlessEngine/OpenAPIs/PaaS/WeCloudDance/static/assets/resource/common/products/WeCloudDance_word_sign-v2.svg");
			jQuery(".nav-header .brand-title").attr("src", "/ServerlessEngine/OpenAPIs/PaaS/WeCloudDance/static/assets/resource/common/products/WeCloudDance_word_sign-v2.svg");
			
			setCookie('logo_src', '/ServerlessEngine/OpenAPIs/PaaS/WeCloudDance/static/assets/resource/common/products/WeCloudDance_small_sign-v2.svg');
			setCookie('logo_src2', '/ServerlessEngine/OpenAPIs/PaaS/WeCloudDance/static/assets/resource/common/products/WeCloudDance_word_sign-v2.svg');
		}else{
			jQuery(".nav-header .logo-abbr").attr("src", "/ServerlessEngine/OpenAPIs/PaaS/WeCloudDance/static/assets/resource/common/products/WeCloudDance_small_sign-v2.svg");
			jQuery(".nav-header .logo-compact").attr("src", "/ServerlessEngine/OpenAPIs/PaaS/WeCloudDance/static/assets/resource/common/products/WeCloudDance_word_sign-v2.svg");
			jQuery(".nav-header .brand-title").attr("src", "/ServerlessEngine/OpenAPIs/PaaS/WeCloudDance/static/assets/resource/common/products/WeCloudDance_word_sign-v2.svg");
			
			setCookie('logo_src', '/ServerlessEngine/OpenAPIs/PaaS/WeCloudDance/static/assets/resource/common/products/WeCloudDance_small_sign-v2.svg');
			setCookie('logo_src2', '/ServerlessEngine/OpenAPIs/PaaS/WeCloudDance/static/assets/resource/common/products/WeCloudDance_word_sign-v2.svg');
		}
		
		setCookie('version', this.value);
    });
	
	

    //change the sidebar position controller
    sidebarPositionSelect.on('change', function() {
        this.value === "fixed" && body.attr('data-sidebar-style') === "modern" && body.attr('data-layout') === "vertical" ? 
        alert("Sorry, Modern sidebar layout dosen't support fixed position!") :
        body.attr('data-sidebar-position', this.value);
		setCookie('sidebarPosition', this.value);
    });

    //change the header position controller
    headerPositionSelect.on('change', function() {
        body.attr('data-header-position', this.value);
		setCookie('headerPosition', this.value);
    });

    //change the theme direction (rtl, ltr) controller
    themeDirectionSelect.on('change', function() {
        html.attr('dir', this.value);
        html.attr('class', '');
        html.addClass(this.value);
        body.attr('direction', this.value);
		setCookie('direction', this.value);
    });

    //change the theme layout controller
    layoutSelect.on('change', function() {
        if(body.attr('data-sidebar-style') === 'overlay') {
            body.attr('data-sidebar-style', 'full');
            body.attr('data-layout', this.value);
            return;
        }

        body.attr('data-layout', this.value);
		setCookie('layout', this.value);
    });
    
    //change the container layout controller
    containerLayoutSelect.on('change', function() {
        if(this.value === "boxed") {

            if(body.attr('data-layout') === "vertical" && body.attr('data-sidebar-style') === "full") {
                body.attr('data-sidebar-style', 'overlay');
                body.attr('data-container', this.value);
                
                setTimeout(function(){
                    $(window).trigger('resize');
                },200);
                
                return;
            }
            
            
        }

        body.attr('data-container', this.value);
		setCookie('containerLayout', this.value);
    });

    //change the sidebar style controller
    sidebarStyleSelect.on('change', function() {
        if(body.attr('data-layout') === "horizontal") {
            if(this.value === "overlay") {
                alert("Sorry! Overlay is not possible in Horizontal layout.");
                return;
            }
        }

        if(body.attr('data-layout') === "vertical") {
            if(body.attr('data-container') === "boxed" && this.value === "full") {
                alert("Sorry! Full menu is not available in Vertical Boxed layout.");
                return;
            }

            if(this.value === "modern" && body.attr('data-sidebar-position') === "fixed") {
                alert("Sorry! Modern sidebar layout is not available in the fixed position. Please change the sidebar position into Static.");
                return;
            }
        }

        body.attr('data-sidebar-style', this.value);

         if(body.attr('data-sidebar-style') === 'icon-hover') {
            $('.deznav').on('hover',function() {
            /**$('#main-wrapper').addClass('iconhover-toggle'); /*/
			$('#main-wrapper').addClass('iconhover-toggle');
            }, function() {
            /**$('#main-wrapper').removeClass('iconhover-toggle'); **/
			$('#main-wrapper').removeClass('iconhover-toggle'); 
            });
        } 
		
		setCookie('sidebarStyle', this.value);
	});

    
	
	jQuery("#nav_header_color_1").on('click',function(){
		jQuery(".nav-header .logo-abbr").attr("src", "/ServerlessEngine/OpenAPIs/PaaS/WeCloudDance/static/assets/resource/common/products/WeCloudDance_small_sign-v2.svg");
		setCookie('logo_src', '/ServerlessEngine/OpenAPIs/PaaS/WeCloudDance/static/assets/resource/common/products/WeCloudDance_small_sign-v2.svg');
		return false;
    });
    
	jQuery("#nav_header_color_2, #nav_header_color_3, #nav_header_color_4, #nav_header_color_5, #nav_header_color_6, #nav_header_color_7, #nav_header_color_8, #nav_header_color_9, #nav_header_color_10, #nav_header_color_11, #nav_header_color_12, #nav_header_color_13, #nav_header_color_14, #nav_header_color_15").on('click',function(){
		jQuery(".nav-header .logo-abbr").attr("src", "/ServerlessEngine/OpenAPIs/PaaS/WeCloudDance/static/assets/resource/common/products/WeCloudDance_small_sign-v2.svg");
		setCookie('logo_src', '/ServerlessEngine/OpenAPIs/PaaS/WeCloudDance/static/assets/resource/common/products/WeCloudDance_small_sign-v2.svg');
		return false;
    });
   
    jQuery("#nav_header_color_3").on('click',function(){
		jQuery(".nav-header .logo-abbr").attr("src", "/ServerlessEngine/OpenAPIs/PaaS/WeCloudDance/static/assets/resource/common/products/WeCloudDance_small_sign-v2.svg");
		setCookie('logo_src', '/ServerlessEngine/OpenAPIs/PaaS/WeCloudDance/static/assets/resource/common/products/WeCloudDance_small_sign-v2.svg');
		return false;
    });

	
	//change the nav-header background controller
    $('input[name="navigation_header"]').on('click', function() {
		body.attr('data-nav-headerbg', this.value);
		setCookie('navheaderBg', this.value);
    });
	
    //change the header background controller
    $('input[name="header_bg"]').on('click', function() {
        body.attr('data-headerbg', this.value);
		setCookie('headerBg', this.value);
    });

    //change the sidebar background controller
    $('input[name="sidebar_bg"]').on('click', function() {
        body.attr('data-sibebarbg', this.value);
		setCookie('sidebarBg', this.value);
    });
	
	//change the primary color controller
    $('input[name="primary_bg"]').on('click', function() {
        body.attr('data-primary', this.value);
		setCookie('primary', this.value);
    });
	
	

})(jQuery);


