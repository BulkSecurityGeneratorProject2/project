'use strict';

angular.module('erpApp')
    .factory('Producttype', function ($resource) {
        return $resource('api/producttypes/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
