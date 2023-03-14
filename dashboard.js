const MAP_KEY = 'java.util.LinkedHashMap';
const LIST_KEY = 'java.util.ArrayList';
const deepClone = (object) => {
    if (typeof object !== 'object' || object == null) {
        return object;
    }
    let result;
    if (object instanceof Array) {
        result = [];
    } else {
        result = {};
    }
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            result[key] = deepClone(object[key]);
        }
    }
    return result;
}
const updateDimensions = (list) =>
    list.map((item) => {
        item[MAP_KEY].column = item[MAP_KEY].name
        return item;
    }) ?? [];
const updateFilters = (list) => {
    return list.map((item) => {
        item[MAP_KEY].field = item[MAP_KEY].member.split('.')?.[1] ?? ''
        if (item[MAP_KEY].conditions?.[LIST_KEY]?.length) {
            item[MAP_KEY].conditions[LIST_KEY] = updateFilters(item[MAP_KEY].conditions[LIST_KEY])
        }
        return item
    });
}
const updatePanel = (panel) => {
    const newPanel = deepClone(panel)
    const charts = Object.keys(newPanel?.[MAP_KEY]);
    if (charts?.length) {
        for (const chartId of charts) {
            const panelItem = newPanel[MAP_KEY][chartId]?.[MAP_KEY];
            if (panelItem) {
                const query = panelItem.query?.[MAP_KEY]

                // 更新指标
                const metrics = query?.metrics?.[LIST_KEY];
                if (metrics?.length) {
                    panelItem.query[MAP_KEY].metrics[LIST_KEY] = metrics.map((item) => {
                        if (item[MAP_KEY].format == null && item[MAP_KEY].measure?.[MAP_KEY]) {
                            item[MAP_KEY].format = item[MAP_KEY].measure[MAP_KEY].format
                        }
                        return item
                    });
                }

                // // 重置过滤器
                // const filters = query?.filters?.[LIST_KEY];
                // if (filters?.length) {
                //     panelItem.query[MAP_KEY].filters[LIST_KEY] = updateFilters(filters)
                // }
                // // 更新排序维度
                // const orders = query?.orders?.[LIST_KEY];
                // if (orders?.length) {
                //     panelItem.query[MAP_KEY].orders[LIST_KEY] = orders.map((item) => {
                //         if (!('category_id' in item[MAP_KEY])) {
                //             item[MAP_KEY].column = item[MAP_KEY].name;
                //         }
                //         return item;
                //     });
                // }
                // // 更新分区维度
                // const partitions = query?.partitions?.[MAP_KEY];
                // if (partitions) {
                //     const keys = Object.keys(partitions);
                //     if (keys?.length) {
                //         for (const id of keys) {
                //             const partitionItem = partitions[id][LIST_KEY];
                //             if (partitionItem?.length) {
                //                 partitions[id][LIST_KEY] = updateDimensions(partitionItem);
                //             }
                //         }
                //     }
                // }
                // // 更新维度
                // const dimensions = query?.dimensions?.[LIST_KEY];
                // if (dimensions?.length) {
                //     panelItem.query[MAP_KEY].dimensions[LIST_KEY] = updateDimensions(dimensions);
                // }

                // const chartconfig = panelItem.chartconfig?.[MAP_KEY]
                // // 更新行维度
                // const row = chartconfig.row?.[LIST_KEY];
                // if (row?.length) {
                //     chartconfig.row[LIST_KEY] = updateDimensions(row);
                // }
                // // 更新详情维度
                // const detailDimens = chartconfig?.detailDimens?.[LIST_KEY];
                // if (detailDimens?.length) {
                //     chartconfig.detailDimens[LIST_KEY] = updateDimensions(detailDimens);
                // }
                // // 更新筛选器
                // if (chartconfig?.filterMethod?.[MAP_KEY].member) {
                //     chartconfig.filterMethod[MAP_KEY].field = chartconfig.filterMethod[MAP_KEY].member.split('.')?.[1] ?? ''
                // }
            }
        }
    }
    return newPanel;
};

// 旧数据
const sql_panel = {
    "java.util.LinkedHashMap": {
        "ef8b607d-c32f-48b0-bd8e-f6a21dbf8e92": {
            "java.util.LinkedHashMap": {
                "type": "filter_tools",
                "query": {
                    "java.util.LinkedHashMap": {
                        "dimensions": {
                            "java.util.ArrayList": [
                                {
                                    "java.util.LinkedHashMap": {
                                        "absolute_name": "retail_stores_by_transaction.order_date_year",
                                        "original_name": "order_date_year",
                                        "name": "order_date_year",
                                        "type": "INT",
                                        "desc": null,
                                        "hidden": false,
                                        "conditions": {
                                            "java.util.ArrayList": [
                                                {
                                                    "java.util.LinkedHashMap": {}
                                                }
                                            ]
                                        },
                                        "display": "order_date_year",
                                        "data_type": "INT",
                                        "column": "retail_stores_by_transaction.order_date_year",
                                        "source_name": "retail_stores_by_transaction",
                                        "dataset_id": "0ce45884-4984-4059-8518-ff147464d8c6",
                                        "metric_id": "07f87d64-6c17-4de6-b073-26761e560735",
                                        "metric_name": "????Average Unit Price",
                                        "metric_status": "ONLINE",
                                        "data_icon": "DATATYPE_NT_BIGINT_16",
                                        "metric_ids": {
                                            "java.util.ArrayList": [
                                                "07f87d64-6c17-4de6-b073-26761e560735",
                                                "4734a405-7c60-4a2b-865d-8640116d7309",
                                                "1f1c8fb1-3f47-4908-b7a2-e47829bc4ce7",
                                                "a3d246e6-ee93-4bcf-a9e3-7eb10aa71b7f",
                                                "bca8b7b0-6252-4a92-862d-70d7525eab7a",
                                                "8c3e972c-d0a1-4479-ad60-195e57224829",
                                                "d5d1f8e4-7b8e-47d9-82bb-edc1fa0c6309",
                                                "d7894aa4-0425-4919-b577-6022731640b2",
                                                "8646ff17-ceaa-4afb-95ca-90a44db7671e",
                                                "f2cbf7f7-70f2-416b-a6b2-57501f4bb90c",
                                                "37ed0668-b41b-4cd1-8082-f2b1df9bbb06",
                                                "1cd57749-a871-4dfe-8cca-3e557622c558",
                                                "5ecf7e8f-17db-4bde-a8e0-96205cc71622",
                                                "aaec296b-7d1b-43d5-9328-3e357ec22f85",
                                                "3dab9249-7288-4360-9059-bbe3b6813a4d",
                                                "5bea2f82-b16f-4668-a73f-710226ecaa56",
                                                "dbb43675-de54-4c75-b810-4f43cde49b94",
                                                "b67e6306-a372-4240-a0ad-c0386de606c2",
                                                "4385d50f-7296-4bba-b5b3-ba5a04f3d4c4",
                                                "d4045de7-cd07-4efd-80df-be74113669a3",
                                                "1b52fcf3-d423-4f62-9225-0dd4281a0a2c",
                                                "724a612d-9990-49e6-bd7b-d45a08fdbb94"
                                            ]
                                        }
                                    }
                                }
                            ]
                        },
                        "metrics": {
                            "java.util.ArrayList": [{
                                "java.util.LinkedHashMap": {
                                    "id": "aaec296b-7d1b-43d5-9328-3e357ec22f85",
                                    "datasource_id": "7735797c-599d-43f0-b572-ab571d880fdd",
                                    "datasource_name": "retail_stores_by_transaction",
                                    "name": "Net Profit",
                                    "display_name": "????Net Profit",
                                    "display_type": "YAML",
                                    "type": "BASIC",
                                    "description": "???????????????????????????",
                                    "dimensions": {
                                        "java.util.ArrayList": ["retail_stores_by_transaction.order_date", "retail_stores_by_transaction.store_city", "retail_stores_by_transaction.store_region", "retail_stores_by_transaction.order_date_year", "retail_stores_by_transaction.item_category", "retail_stores_by_transaction.order_date_month"]
                                    },
                                    "time_dimensions": {
                                        "java.util.ArrayList": ["retail_stores_by_transaction.order_date"]
                                    },
                                    "measure": {
                                        "java.util.LinkedHashMap": {
                                            "expressions": "retail_stores_by_transaction.order_net_profit",
                                            "aggregation": "sum",
                                            "return_type": "double",
                                            "format": {
                                                "java.util.LinkedHashMap": {
                                                    "type": "currency",
                                                    "unit": "Auto",
                                                    "decimal_place": 2,
                                                    "currency_symbol": "$",
                                                    "use_thousand_separator": true
                                                }
                                            }
                                        }
                                    },
                                    "filters": null,
                                    "related_metrics": null,
                                    "status": "ONLINE",
                                    "created_by": "training@kyligence.io",
                                    "created_id": null,
                                    "created": 0,
                                    "last_modified": 0,
                                    "display": "retail_stores_by_transaction.order_net_profit",
                                    "expressions": "retail_stores_by_transaction.order_net_profit",
                                    "dataset_id": "0ce45884-4984-4059-8518-ff147464d8c6",
                                    "dataset_name": "retail_stores_by_transaction",
                                    "data_type": "double",
                                    "data_icon": "DECIMAL_16"
                                }
                            }, {
                                "java.util.LinkedHashMap": {
                                    "id": "724a612d-9990-49e6-bd7b-d45a08fdbb94",
                                    "datasource_id": "7735797c-599d-43f0-b572-ab571d880fdd",
                                    "datasource_name": "retail_stores_by_transaction",
                                    "name": "Total Sales",
                                    "display_name": "?????Total Sales",
                                    "display_type": "YAML",
                                    "type": "BASIC",
                                    "description": "?????????????????GMV?Gross Merchandise Volume?",
                                    "dimensions": {
                                        "java.util.ArrayList": ["retail_stores_by_transaction.order_date", "retail_stores_by_transaction.store_city", "retail_stores_by_transaction.store_region", "retail_stores_by_transaction.order_date_year", "retail_stores_by_transaction.item_category", "retail_stores_by_transaction.order_date_month"]
                                    },
                                    "time_dimensions": {
                                        "java.util.ArrayList": ["retail_stores_by_transaction.order_date"]
                                    },
                                    "measure": {
                                        "java.util.LinkedHashMap": {
                                            "expressions": "retail_stores_by_transaction.item_unit_price * (1 - retail_stores_by_transaction.item_discount) * retail_stores_by_transaction.order_quantity",
                                            "aggregation": "sum",
                                            "return_type": "double",
                                            "format": {
                                                "java.util.LinkedHashMap": {
                                                    "type": "currency",
                                                    "unit": "Auto",
                                                    "decimal_place": 2,
                                                    "currency_symbol": "$",
                                                    "use_thousand_separator": true
                                                }
                                            }
                                        }
                                    },
                                    "filters": null,
                                    "related_metrics": null,
                                    "status": "ONLINE",
                                    "created_by": "training@kyligence.io",
                                    "created_id": null,
                                    "created": 0,
                                    "last_modified": 0,
                                    "display": "retail_stores_by_transaction.item_unit_price * (1 - retail_stores_by_transaction.item_discount) * retail_stores_by_transaction.order_quantity",
                                    "expressions": "retail_stores_by_transaction.item_unit_price * (1 - retail_stores_by_transaction.item_discount) * retail_stores_by_transaction.order_quantity",
                                    "dataset_id": "0ce45884-4984-4059-8518-ff147464d8c6",
                                    "dataset_name": "retail_stores_by_transaction",
                                    "data_type": "double",
                                    "data_icon": "DECIMAL_16"
                                }
                            }]
                        },
                        "limit": 1000,
                        "orders": {
                            "java.util.ArrayList": []
                        },
                        "filters": {
                            "java.util.ArrayList": [
                                {
                                    "java.util.LinkedHashMap": {
                                        "operator": "IN",
                                        "key": "N_COMMENT",
                                        "member": "xxig.N_COMMENT",
                                        "values": [
                                            " haggle. carefully final deposits detect slyly agai",
                                            " pending excuses haggle furiously deposits. pending. express pinto beans wake fluffily past t"
                                        ],
                                        "conditions": []
                                    }
                                },
                                {
                                    "java.util.LinkedHashMap": {
                                        "operator": "AND",
                                        "member": "xxig.N_NATIONKEY",
                                        "conditions": {
                                            "java.util.ArrayList": [
                                                {
                                                    "java.util.LinkedHashMap": {
                                                        "operator": "GTE",
                                                        "key": "N_NATIONKEY",
                                                        "member": "xxig.N_NATIONKEY",
                                                        "values": ["0"]
                                                    }
                                                },
                                                {
                                                    "java.util.LinkedHashMap": {
                                                        "operator": "LT",
                                                        "key": "N_NATIONKEY",
                                                        "member": "xxig.N_NATIONKEY",
                                                        "values": ["24"]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                }
                            ]
                        },
                        "partitions": {
                            "java.util.LinkedHashMap": {
                                "f72d91bc-216a-45ba-98bf-b31a81ab69c2": {
                                    "java.util.ArrayList": [
                                        {
                                            "java.util.LinkedHashMap": {
                                                "metrics": [
                                                    {
                                                        "id": "f72d91bc-216a-45ba-98bf-b31a81ab69c2",
                                                        "name": "derived_percentdiff",
                                                        "display_name": "derived_percentdiff"
                                                    }
                                                ],
                                                "name": "D_YEAR",
                                                "group": "V_SSB_L_left_S_left_D_left_P_left_C",
                                                "type": "INT",
                                                "display_name": "D_YEAR",
                                                "column": "xxig.D_YEAR",
                                                "display": "D_YEAR",
                                                "data_type": "INT"
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    }
                },
                "chartconfig": {
                    "java.util.LinkedHashMap": {
                        "row": {
                            "java.util.ArrayList": [
                                {
                                    "java.util.LinkedHashMap": {
                                        "absolute_name": "retail_stores_by_transaction.order_date_year",
                                        "original_name": "order_date_year",
                                        "name": "order_date_year",
                                        "type": "INT",
                                        "desc": null,
                                        "hidden": false,
                                        "conditions": {
                                            "java.util.ArrayList": [
                                                {
                                                    "java.util.LinkedHashMap": {}
                                                }
                                            ]
                                        },
                                        "display": "order_date_year",
                                        "data_type": "INT",
                                        "column": "retail_stores_by_transaction.order_date_year",
                                        "source_name": "retail_stores_by_transaction",
                                        "dataset_id": "0ce45884-4984-4059-8518-ff147464d8c6",
                                        "metric_id": "07f87d64-6c17-4de6-b073-26761e560735",
                                        "metric_name": "????Average Unit Price",
                                        "metric_status": "ONLINE",
                                        "data_icon": "DATATYPE_NT_BIGINT_16",
                                        "metric_ids": {
                                            "java.util.ArrayList": [
                                                "07f87d64-6c17-4de6-b073-26761e560735",
                                                "4734a405-7c60-4a2b-865d-8640116d7309",
                                                "1f1c8fb1-3f47-4908-b7a2-e47829bc4ce7",
                                                "a3d246e6-ee93-4bcf-a9e3-7eb10aa71b7f",
                                                "bca8b7b0-6252-4a92-862d-70d7525eab7a",
                                                "8c3e972c-d0a1-4479-ad60-195e57224829",
                                                "d5d1f8e4-7b8e-47d9-82bb-edc1fa0c6309",
                                                "d7894aa4-0425-4919-b577-6022731640b2",
                                                "8646ff17-ceaa-4afb-95ca-90a44db7671e",
                                                "f2cbf7f7-70f2-416b-a6b2-57501f4bb90c",
                                                "37ed0668-b41b-4cd1-8082-f2b1df9bbb06",
                                                "1cd57749-a871-4dfe-8cca-3e557622c558",
                                                "5ecf7e8f-17db-4bde-a8e0-96205cc71622",
                                                "aaec296b-7d1b-43d5-9328-3e357ec22f85",
                                                "3dab9249-7288-4360-9059-bbe3b6813a4d",
                                                "5bea2f82-b16f-4668-a73f-710226ecaa56",
                                                "dbb43675-de54-4c75-b810-4f43cde49b94",
                                                "b67e6306-a372-4240-a0ad-c0386de606c2",
                                                "4385d50f-7296-4bba-b5b3-ba5a04f3d4c4",
                                                "d4045de7-cd07-4efd-80df-be74113669a3",
                                                "1b52fcf3-d423-4f62-9225-0dd4281a0a2c",
                                                "724a612d-9990-49e6-bd7b-d45a08fdbb94"
                                            ]
                                        }
                                    }
                                }
                            ]
                        },
                        "column": {
                            "java.util.ArrayList": []
                        },
                        "detailDimens": {
                            "java.util.ArrayList": []
                        },
                        "filterMethod": {
                            "java.util.LinkedHashMap": {
                                "type": "valueRange",
                                "member": "retail_stores_by_transaction.order_date_year",
                                "values": {
                                    "java.util.LinkedHashMap": {
                                        "value": {
                                            "java.util.ArrayList": ["2016", "2018"]
                                        },
                                        "withMin": true,
                                        "withMax": true
                                    }
                                }
                            }
                        },
                        "filterStyle": {
                            "java.util.LinkedHashMap": {
                                "type": "list"
                            }
                        },
                        "chartConfigDynamic": {
                            "java.util.LinkedHashMap": {}
                        }
                    }
                },
                "setting": {
                    "java.util.LinkedHashMap": {
                        "title": "?????????Order Month?Filter?",
                        "title_show": true
                    }
                }
            }
        },
    }
}

// 输出新数据
const new_panel = updatePanel(sql_panel)
console.log(new_panel)

