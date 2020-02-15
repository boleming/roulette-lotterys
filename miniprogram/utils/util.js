"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = function (url, resType, callBack) {
    wx.request({
        url: url,
        method: resType,
        header: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        success: function (res) {
            callBack(res.data.imgs);
        },
        fail: function (err) {
            console.log(err);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFYyxRQUFBLE9BQU8sR0FBSSxVQUFDLEdBQVcsRUFBRSxPQUFZLEVBQUMsUUFBaUI7SUFDbkUsRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUU7WUFDTixjQUFjLEVBQUUsZ0NBQWdDO1NBQ2pEO1FBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBUTtZQUNoQixRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUt6QixDQUFDO1FBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQztLQUNGLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIOivt+axguWbvueJh+aVsOaNrlxudHlwZSBjYWxsQmFjayA9IChkYXRhOmFueVtdKSA9PiB2b2lkO1xuZXhwb3J0IGNvbnN0ICBnZXREYXRhICA9ICh1cmw6IHN0cmluZywgcmVzVHlwZTogYW55LGNhbGxCYWNrOmNhbGxCYWNrKSA9PntcbiAgd3gucmVxdWVzdCh7XG4gICAgdXJsOiB1cmwsXG4gICAgbWV0aG9kOiByZXNUeXBlLFxuICAgIGhlYWRlcjoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLThcIlxuICAgIH0sXG4gICAgc3VjY2VzczogKHJlczogYW55KSA9PiB7XG4gICAgICBjYWxsQmFjayhyZXMuZGF0YS5pbWdzKVxuICAgICAgLy8gdGhpcy5zZXREYXRhKHtcbiAgICAgIC8vICAgaW1nczogcmVzLmRhdGEuaW1nc1xuICAgICAgLy8gfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5pbWdzKVxuICAgIH0sXG4gICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH0pXG59Il19