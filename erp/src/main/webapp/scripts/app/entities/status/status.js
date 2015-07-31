'use strict';

angular.module('erpApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('status', {
                parent: 'entity',
                url: '/status',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'erpApp.status.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/status/statuss.html',
                        controller: 'StatusController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('status');
                        return $translate.refresh();
                    }]
                }
            })
            .state('statusDetail', {
                parent: 'entity',
                url: '/status/:id',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'erpApp.status.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/status/status-detail.html',
                        controller: 'StatusDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('status');
                        return $translate.refresh();
                    }]
                }
            });
    });
