'use strict';

angular.module('erpApp')
    .factory('UserGroupRights', function ($resource) {
        return $resource('api/userGroupRightss/:id', {}, {
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
