angular.module('myapp', [])
    .controller('mycontroller', function($scope, $http,$log) {
        $scope.data = {
            model: null,
            availableOptions: [
                {id: 'en', name: 'English'},
                {id: 'hi', name: 'Hindi'},
                {id: 'es', name: 'Spanish'},
                {id:'ar', name: 'Arabic'},
                {id:'te', name: 'Telugu'},
                {id:'fr', name:'French'}
            ]
        };
        $scope.data1 = {
            model: null,
            availableOptions: [
                {id: 'en', name: 'English'},
                {id: 'hi', name: 'Hindi'},
                {id: 'es', name: 'Spanish'},
                {id:'ar', name: 'Arabic'},
                {id:'te', name: 'Telugu'},
                {id:'fr', name:'French'}
            ]
        };
        $scope.translate = function()  {
            console.log("kdjfnm");
            var successCallBack = function (response) {
                console.log("SUCCESS");
                console.log(response.data);
                $scope.text = response.data.text[0];
            };
            var failureCallBack = function (response) {
                console.log("FAIL");
                $scope.error = response.data;
                $log.info(response);
            };
            var sourceText = document.getElementById("SourceLanguage").value;
            console.log(sourceText);
            console.log();
            console.log();
            $http({
                method: 'GET',
                url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?key= trnsl.1.1.20190618T193534Z.51f87f5a20c837a7.4da5686529047d12220032120ba4c631dd89251c&text='+ sourceText + '&lang='+$scope.data.model+'-'+$scope.data1.model+'&[format=plain]&[options=1]&[callback=set]'
            })
                .then(successCallBack, failureCallBack);
        };
    });