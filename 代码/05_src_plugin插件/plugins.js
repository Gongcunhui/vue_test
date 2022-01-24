export default {
    install(Vue, a, b, c) {
        console.log('@插件被使用了');
        console.log(a, b, c);
        //定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        });
        //定义自定义指令
        Vue.directive('big', function(element, binding) {
            // console.log(element, binding);
            element.value = binding.value * 10
        });
        //定义过滤器
        Vue.filter('mySlice', function(value) {
            return value.slice(0, 5)
        })

        //给vue的原型上添加一个额方法
        Vue.prototype.hello = () => { alert('你好啊') }
    }
}