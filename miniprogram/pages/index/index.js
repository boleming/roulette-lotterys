"use strict";
Page({
    data: {
        animationData: {},
        imgs: []
    },
    onLoad: function () {
        this.getData('http://localhost/rouletteData/rouletteData.php?action=read', 'GET');
    },
    onRotate: function () {
        var num = 360 / 7;
        var degrees = this.getRandom(1800, 3600);
        this.getAnimation(3000, degrees);
        if (degrees % 360 <= num * 1) {
            this.onShowModal('免分期服务费');
        }
        else if (degrees % 360 <= num * 2) {
            this.onShowModal('提高白条额度');
        }
        else if (degrees % 360 <= num * 3) {
            this.onShowModal('未中奖');
        }
        else if (degrees % 360 <= num * 4) {
            this.onShowModal('免单4999元');
        }
        else if (degrees % 360 <= num * 5) {
            this.onShowModal('免单50元');
        }
        else if (degrees % 360 <= num * 6) {
            this.onShowModal('免单10元');
        }
        else if (degrees % 360 <= num * 7) {
            this.onShowModal('免单5元');
        }
    },
    onShowModal: function (str) {
        var _this = this;
        setTimeout(function () {
            wx.showModal({
                title: '中奖信息',
                content: str,
                success: function () {
                    _this.getAnimation(0, 0);
                }
            });
        }, 3000);
    },
    getAnimation: function (s, degrees) {
        var animation = wx.createAnimation({
            duration: s,
            timingFunction: 'ease',
        });
        animation.rotate(degrees).step();
        this.setData({
            animationData: animation.export()
        });
    },
    getRandom: function (min, max) {
        var i = max - min + 1;
        return Math.floor(Math.random() * i) + min;
    },
    getData: function (url, resType) {
        var _this = this;
        wx.request({
            url: url,
            method: resType,
            header: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            success: function (res) {
                _this.setData({
                    imgs: res.data.imgs
                });
            },
            fail: function (err) {
                console.log(err);
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osYUFBYSxFQUFFLEVBQUU7UUFDakIsSUFBSSxFQUFDLEVBQUU7S0FDUjtJQUNELE1BQU0sRUFBTjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsNERBQTRELEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVBLFFBQVEsRUFBUjtRQUNDLElBQUksR0FBRyxHQUFVLEdBQUcsR0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxPQUFPLEdBQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDLENBQUM7UUFFaEMsSUFBRyxPQUFPLEdBQUMsR0FBRyxJQUFFLEdBQUcsR0FBQyxDQUFDLEVBQUM7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QjthQUFLLElBQUcsT0FBTyxHQUFDLEdBQUcsSUFBRSxHQUFHLEdBQUMsQ0FBQyxFQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUI7YUFBSyxJQUFHLE9BQU8sR0FBQyxHQUFHLElBQUUsR0FBRyxHQUFDLENBQUMsRUFBQztZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO2FBQUssSUFBRyxPQUFPLEdBQUMsR0FBRyxJQUFFLEdBQUcsR0FBQyxDQUFDLEVBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3QjthQUFLLElBQUcsT0FBTyxHQUFDLEdBQUcsSUFBRSxHQUFHLEdBQUMsQ0FBQyxFQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0I7YUFBSyxJQUFHLE9BQU8sR0FBQyxHQUFHLElBQUUsR0FBRyxHQUFDLENBQUMsRUFBQztZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNCO2FBQUssSUFBRyxPQUFPLEdBQUMsR0FBRyxJQUFFLEdBQUcsR0FBQyxDQUFDLEVBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxXQUFXLEVBQVgsVUFBWSxHQUFVO1FBQXRCLGlCQVVDO1FBVEMsVUFBVSxDQUFDO1lBQ1QsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsTUFBTTtnQkFDYixPQUFPLEVBQUUsR0FBRztnQkFDWixPQUFPLEVBQUM7b0JBQ04sS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUE7SUFDVCxDQUFDO0lBRUQsWUFBWSxFQUFaLFVBQWEsQ0FBUSxFQUFDLE9BQWM7UUFDbEMsSUFBSSxTQUFTLEdBQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUNyQyxRQUFRLEVBQUUsQ0FBQztZQUNYLGNBQWMsRUFBRSxNQUFNO1NBQ3ZCLENBQUMsQ0FBQTtRQUNGLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGFBQWEsRUFBRSxTQUFTLENBQUMsTUFBTSxFQUFFO1NBQ2xDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxTQUFTLEVBQVQsVUFBVSxHQUFXLEVBQUUsR0FBVztRQUNoQyxJQUFJLENBQUMsR0FBVyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUM5QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUU3QyxDQUFDO0lBRUQsT0FBTyxFQUFQLFVBQVEsR0FBVSxFQUFDLE9BQVc7UUFBOUIsaUJBaUJDO1FBaEJDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUMsR0FBRztZQUNQLE1BQU0sRUFBRSxPQUFPO1lBQ2YsTUFBTSxFQUFFO2dCQUNOLGNBQWMsRUFBRSxnQ0FBZ0M7YUFDakQ7WUFDRCxPQUFPLEVBQUMsVUFBQyxHQUFPO2dCQUNkLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsSUFBSSxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtpQkFDbkIsQ0FBQyxDQUFBO1lBRUosQ0FBQztZQUNELElBQUksRUFBQyxVQUFDLEdBQUc7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7Um91bGV0dGV9IGZyb20gJ2NsYXNzL1JvdWxldHRlLmpzJztcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgYW5pbWF0aW9uRGF0YToge30sLy/liqjnlLvnmoRjc3Mz5pWw5o2uLFxuICAgIGltZ3M6W11cbiAgfSxcbiAgb25Mb2FkKCk6IHZvaWQge1xuICAgIHRoaXMuZ2V0RGF0YSgnaHR0cDovL2xvY2FsaG9zdC9yb3VsZXR0ZURhdGEvcm91bGV0dGVEYXRhLnBocD9hY3Rpb249cmVhZCcsJ0dFVCcpO1xuICB9LFxuICAgLy/ngrnlh7vlkI7ml4vovaxcbiAgIG9uUm90YXRlKCk6dm9pZHtcbiAgICBsZXQgbnVtOm51bWJlciA9IDM2MC83O1xuICAgIGxldCBkZWdyZWVzOm51bWJlciA9IHRoaXMuZ2V0UmFuZG9tKDE4MDAsMzYwMCk7Ly/ojrflj5bpmo/mnLrluqbmlbBcbiAgICB0aGlzLmdldEFuaW1hdGlvbigzMDAwLGRlZ3JlZXMpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRlZ3JlZXMpXG4gICAgaWYoZGVncmVlcyUzNjA8PW51bSoxKXtcbiAgICAgIHRoaXMub25TaG93TW9kYWwoJ+WFjeWIhuacn+acjeWKoei0uScpO1xuICAgIH1lbHNlIGlmKGRlZ3JlZXMlMzYwPD1udW0qMil7XG4gICAgICB0aGlzLm9uU2hvd01vZGFsKCfmj5Dpq5jnmb3mnaHpop3luqYnKTtcbiAgICB9ZWxzZSBpZihkZWdyZWVzJTM2MDw9bnVtKjMpe1xuICAgICAgdGhpcy5vblNob3dNb2RhbCgn5pyq5Lit5aWWJyk7XG4gICAgfWVsc2UgaWYoZGVncmVlcyUzNjA8PW51bSo0KXtcbiAgICAgIHRoaXMub25TaG93TW9kYWwoJ+WFjeWNlTQ5OTnlhYMnKTtcbiAgICB9ZWxzZSBpZihkZWdyZWVzJTM2MDw9bnVtKjUpe1xuICAgICAgdGhpcy5vblNob3dNb2RhbCgn5YWN5Y2VNTDlhYMnKTtcbiAgICB9ZWxzZSBpZihkZWdyZWVzJTM2MDw9bnVtKjYpe1xuICAgICAgdGhpcy5vblNob3dNb2RhbCgn5YWN5Y2VMTDlhYMnKTtcbiAgICB9ZWxzZSBpZihkZWdyZWVzJTM2MDw9bnVtKjcpe1xuICAgICAgdGhpcy5vblNob3dNb2RhbCgn5YWN5Y2VNeWFgycpO1xuICAgIH1cbiAgfSxcbiAgLy/kuK3lpZbkv6Hmga/lvLnnqpfliqjnlLtcbiAgb25TaG93TW9kYWwoc3RyOnN0cmluZyk6dm9pZHtcbiAgICBzZXRUaW1lb3V0KCgpOnZvaWQ9PntcbiAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn5Lit5aWW5L+h5oGvJyxcbiAgICAgICAgY29udGVudDogc3RyLFxuICAgICAgICBzdWNjZXNzOigpOnZvaWQ9PntcbiAgICAgICAgICB0aGlzLmdldEFuaW1hdGlvbigwLDApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sMzAwMClcbiAgfSxcbiAgLy/lhajlsYDliqjnlLvlh73mlbDvvIznp5LmlbDlkozml4vovazluqbmlbDkvKDlj4Llj6/lpI3nlKhcbiAgZ2V0QW5pbWF0aW9uKHM6bnVtYmVyLGRlZ3JlZXM6bnVtYmVyKTp2b2lke1xuICAgIGxldCBhbmltYXRpb246YW55ID0gd3guY3JlYXRlQW5pbWF0aW9uKHsvL+WumuS5ieWFqOWxgOWIneWni+WMluWKqOeUu1xuICAgICAgZHVyYXRpb246IHMsLy/lrprkuYnliqjnlLvmjIHnu63nmoTml7bpl7RcbiAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsLy/lrprkuYnliqjnlLvnmoTov5vooYxcbiAgICB9KVxuICAgIGFuaW1hdGlvbi5yb3RhdGUoZGVncmVlcykuc3RlcCgpOy8v5peL6L2s5YiwbuW6plxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb24uZXhwb3J0KCkvL+WwhuWumuS5ieeahOWKqOeUu+i1i+WAvOe7mWFuaW1hdGlvbkRhdGFcbiAgICB9KVxuICB9LFxuICAvL+maj+acuuW6puaVsFxuICBnZXRSYW5kb20obWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgaTogbnVtYmVyID0gbWF4IC0gbWluICsgMTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSkgKyBtaW47Ly/orr7nva7pmo/mnLrml4vovaznmoTluqbmlbBcbiAgICAvLyByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjE4MDEpKzE4MDA7XG4gIH0sXG4gIC8vIOivt+axguWbvueJh+aVsOaNrlxuICBnZXREYXRhKHVybDpzdHJpbmcscmVzVHlwZTphbnkpOnZvaWQge1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOnVybCxcbiAgICAgIG1ldGhvZDogcmVzVHlwZSxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwiXG4gICAgICB9LFxuICAgICAgc3VjY2VzczoocmVzOmFueSk6dm9pZD0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBpbWdzOnJlcy5kYXRhLmltZ3NcbiAgICAgICAgfSlcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRhLmltZ3MpXG4gICAgICB9LFxuICAgICAgZmFpbDooZXJyKT0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuIl19