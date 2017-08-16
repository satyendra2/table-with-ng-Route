app.controller("tableController",function($scope,$http){
         var url = "./partialls/component/json/item.json";
		 $http.get(url).then(function(response){
		 $scope.items = response.data;
		 var objectIndex = "";
		 });
		 $scope.checkAll = function(){
			 if($scope.selectedAll){
				 $scope.selectedAll = true;
             } else {
				 $scope.selectedAll = false;
			 }
			 angular.forEach($scope.items,function(item){
				 item.selected = $scope.selectedAll;
			 });
		 };
		 $scope.edit = function(id){
			$scope.objectIndex = id;
			$scope.itemObject = angular.copy($scope.items[id]);
		 };
		 $scope.add = function(){
			 if($scope.items[$scope.objectIndex] == null){
				 $scope.items.push($scope.itemObject);
				 $scope.update = angular.copy.itemObject;
			 } else {
				 $scope.items[$scope.objectIndex] = $scope.itemObject;
			 }
			 $scope.itemObject = {};
			 $scope.objectIndex = "";
		 };
		  $scope.delete = function(){
	            var newDataList=[];
	            $scope.selectedAll = false;
	            angular.forEach($scope.items, function(selected){
	                if(!selected.selected){
	                    newDataList.push(selected);
	                }
	            }); 
	            $scope.items = newDataList;
	        };
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
});