# H5 打开点播页

## 引用
### 再html中引人jsbridge个文件
   ```html
       <script src="https://ohudong.cztv.com/1/263328/js/callApp.js?v=20220119000"></script>
    <script src="https://ohudong.cztv.com/1/263328/js/callUpApp.js?v=20220119000"></script>
   ```

## 使用
```ts
 const openTvApp = () => {
      // window.location.replace('https://mhudong.cztv.com/download/index.html')
      // window.callUpApp(appurl)
      var iosScheme = {
        protocol: "ChinaBlueTV",
        host: "CallingAppFlag",
      };
      var androidScheme = {
        protocol: "chinablue",
        host: "cztvrouter",
      };
      var tempUserAgent = window.navigator.userAgent || "";

      var option = {
        scheme: /iphone|ipad|ipod/i.test(tempUserAgent) ? iosScheme : androidScheme,
        intent: {
          package: "com.chinablue.tv",
          scheme: "chinablue",
        },
        universal: {
          host: "mhudong.cztv.com/download/index.html",
        },
        appstore: "https://itunes.apple.com/cn/app/zhong-guo-lantv/id988616225?mt=8",
        yingyongbao: "https://a.app.qq.com/o/simple.jsp?pkgname=com.chinablue.tv",
        fallback: "https://mhudong.cztv.com/download/index.html",
        timeout: 3000,
      };

      //打开当前视频对应点播页
      function openCurVideoApp() {
        var config = getCurVideoConfig();
        callUpApp(config);
      }


      //返回当前视频参数
      function getCurVideoConfig() {
        var base64 = new Base64();
        var video_id = base64.encode(1315868 + ""); // 直播间ID
        var type = base64.encode(0 + "");
        var video_title = base64.encode('“兔”露新声，越歌春韵！浙江卫视新春佳节晚会连台！' + "");
        //1代表点播，999代表
        var detail_type = base64.encode(1 + "");
        var ua = window.navigator.userAgent || "";
        var isAndroid = /android/i.test(ua);
        var config;
        if (isAndroid) {
          config = {
            path: "",
            param: {
              detail_type: detail_type,
              video_id: video_id,
              video_title: video_title,
            },
          };
        } else {
          config = {
            path: "",
            param: {
              videoDetailType: "MQ==",
              video_id: video_id,
              video_title: video_title,
              type: type,
            },
          };
        }

        return config;
      }

      function callUpApp(config) {
        console.log("***开始调起lib***");
        var lib = new CallApp(option);
        lib.open(config);
      }

      var ua = window.navigator.userAgent || '';
      var isAndroid = /android/i.test(ua);
      var isIos = /iphone|ipad|ipod/i.test(ua);
      if (isAndroid) {
        window.location.replace('http://tv.cztv.com/vplay/1315868.html');
      } else {
        openCurVideoApp()
      }
    }
```

## 注意 :zap:

- 注意参数 直播间ID （video_id） 标题（video_title） 必填
- [参考项目](http://10.30.100.65/-/ide/project/tv-template/vite-game-template/tree/feature-%E9%A3%9E%E9%B8%9Fapp-zxx/-/src/views/game/index.vue/)