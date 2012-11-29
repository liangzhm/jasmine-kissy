/**
 * @fileoverview ���в�������
 * @author ��ƽ�����ӣ�<minghe36@gmail.com>
 **/
KISSY.add('jasmine/runner',function (S) {

    S.Config.debug = '@DEBUG@';
    S.config({
        packages:[
            {
                name:"gallery",
                path:"http://a.tbcdn.cn/s/kissy/",
                charset:"utf-8"
            }
        ]
    });

    /**
     * ִ��jasmine�����������Խ����
     */
    function execute(){
        var env = jasmine.getEnv();
        env.addReporter(new jasmine.HtmlReporter);
        env.execute();
    }

    /**
     *  ���в���ģ��
     * @param {String | Array} mods ģ��
     * @param {Object} package ������
     */
    function runner(mods,package){
        var specsPackage =  package;
        if(!S.isObject(specsPackage)){
            specsPackage =  {
                name:'specs',
                path:'./',
                charset:"gbk"
            }
        }

        S.config({ packages:[ specsPackage ] });

        if(S.isString(mods)){
            S.use(mods,function(){
                execute();
            })
        }
        else if(S.isArray(mods)){
            S.use(mods.join((',')),function(){
                execute();
            })
        }
    }

    return runner;
});