/**
 * Created by jonnygold on 01/05/2016.
 */
//Serives for handling HTTP and rest calls
app.services.service('$httpServices', function($http, $rootScope, $q) {

    this.getHttpLst = function(path) {
        return $http.get(path).then(function(resp) {

            var obj = resp.data;
            return obj;
        });
    }

    this.postHttpItem = function(path, data) {

        var config = {
            headers: { 'Content-Type': 'application/json' }
        };

        return $http.post(path, data, config).then(function(resp) {
            var obj = resp.data;
            return obj;
        });
    };


    this.putHttpItem = function(path, data) {

        var config = {
            headers: { 'Content-Type': "application/json;charset=UTF-8" }
        };


        return $http.put(path, data, config).then(function(resp) {
            return resp;
        });

    };

    this.putHttpSecureItem = function(path, data, token) {

        token = 'bearer ' + token;

        var config = {
            headers: { 'Content-Type': "application/json;charset=UTF-8", Authorization: token }
        };


        return $http.put(path, data, config).then(function(resp) {
            return resp;
        });

    };



    this.getHttpSecureLst = function(path, token) {

        token = 'bearer ' + token;

        var config = {
            headers: { 'Content-Type': 'application/json', Authorization: token }
        };

        return $http.get(path, config).then(function(resp) {
            arr = resp.data;
            return JSON.parse(arr);
        });
    };

    this.postHttpSecureItem = function(path, data, token) {

        token = 'bearer ' + token;

        var config = {
            headers: { 'Content-Type': 'application/json', Authorization: token }
        };

        return $http.post(path, data, config).then(function(resp) {
            return resp;
        });
    };

    this.putHttpSecureItem = function(path, data, token) {

        token = 'bearer ' + token;

        var config = {
            headers: { 'Content-Type': "application/json;charset=UTF-8", Authorization: token }
        };


        return $http.put(path, data, config).then(function(resp) {
            return resp;
        });

    };

    this.deleteHttpSecureItem = function(path, token) {

        token = 'bearer ' + token;

        var config = {
            headers: { 'Content-Type': "application/json;charset=UTF-8", Authorization: token }
        };


        return $http.delete(path, config).then(function(resp) {
            return resp;
        });

    };


});
