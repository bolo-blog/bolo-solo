/*
 * Bolo - A stable and beautiful blogging system based in Solo.
 * Copyright (c) 2020-present, https://github.com/bolo-blog
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
/**
 * category list for admin
 *
 * @author <a href="http://vanessa.b3log.org">Liyuan Li</a>
 * @author <a href="http://88250.b3log.org">Liang Ding (Solo Author)</a>
 * @author <a href="https://github.com/adlered">adlered (Bolo Author)</a>
 * @since 2.0.0
 */

/* category-list 相关操作 */
admin.categoryList = {
    tablePagination: new TablePaginate("category"),
    pageInfo: {
        currentCount: 1,
        pageCount: 1,
        currentPage: 1
    },
    /* 
     * 初始化 table, pagination
     */
    init: function(page) {
        this.tablePagination.buildTable([{
                text: "",
                index: "linkOrder",
                width: 60
            }, {
                style: "padding-left: 12px;",
                text: Label.titleLabel,
                index: "categoryTitle",
                width: 230
            }, {
                style: "padding-left: 12px;",
                text: 'URI',
                index: "categoryURI",
                width: 230
            }, {
                style: "padding-left: 12px;",
                text: Label.descriptionLabel,
                index: "categoryDesc",
                minWidth: 180
            }]);

        this.tablePagination.initPagination();
        this.getList(page);

        // For tag auto-completion
        $.ajax({// Gets all tags
            url: Label.servePath + "/console/tags",
            type: "GET",
            cache: false,
            success: function (result, textStatus) {
                $("#tipMsg").text(result.msg);
                if (!result.sc) {
                    $("#loadMsg").text("");
                    return;
                }

                if (0 >= result.tags.length) {
                    return;
                }

                var tags = [];
                for (var i = 0; i < result.tags.length; i++) {
                    tags.push(result.tags[i].tagTitle);
                }

                $("#categoryTags").completed({
                    height: 160,
                    buttonText: Label.selectLabel,
                    data: tags
                });

                $("#loadMsg").text("");
            }
        });
    },
    /* 
     * 根据当前页码获取列表
     * @pagNum 当前页码
     */
    getList: function(pageNum) {
        $("#loadMsg").text(Label.loadingLabel);
        $("#tipMsg").text("");
        this.pageInfo.currentPage = pageNum;
        var that = this;

        $.ajax({
            url: Label.servePath + "/console/categories/" + pageNum + "/" + Label.PAGE_SIZE + "/" + Label.WINDOW_SIZE,
            type: "GET",
            cache: false,
            success: function(result, textStatus) {
                $("#tipMsg").text(result.msg);
                if (!result.sc) {
                    $("#loadMsg").text("");
                    return;
                }

                var categories = result.categories;
                var categoryData = [];
                admin.categoryList.pageInfo.currentCount = categories.length;
                admin.categoryList.pageInfo.pageCount = result.pagination.paginationPageCount === 0 ? 1 : result.pagination.paginationPageCount;

                for (var i = 0; i < categories.length; i++) {
                    categoryData[i] = {};
                    if (i === 0) {
                        if (categories.length === 1) {
                            categoryData[i].linkOrder = "";
                        } else {
                            categoryData[i].linkOrder = '<div class="table-center" style="width:14px">\
                                <span onclick="admin.categoryList.changeOrder(' + categories[i].oId + ', ' + i + ', \'down\');" class="icon-move-down"></span>\
                            </div>';
                        }
                    } else if (i === categories.length - 1) {
                        categoryData[i].linkOrder = '<div class="table-center" style="width:14px">\
                                <span onclick="admin.categoryList.changeOrder(' + categories[i].oId + ', ' + i + ', \'up\');" class="icon-move-up"></span>\
                            </div>';
                    } else {
                        categoryData[i].linkOrder = '<div class="table-center" style="width:38px">\
                                <span onclick="admin.categoryList.changeOrder(' + categories[i].oId + ', ' + i + ', \'up\');" class="icon-move-up"></span>\
                                <span onclick="admin.categoryList.changeOrder(' + categories[i].oId + ', ' + i + ', \'down\');" class="icon-move-down"></span>\
                            </div>';
                    }

                    categoryData[i].categoryTitle = categories[i].categoryTitle;
                    categoryData[i].categoryURI = categories[i].categoryURI;
                    categoryData[i].categoryDesc = categories[i].categoryDescription;

                    categoryData[i].expendRow = "<a href='javascript:void(0)' onclick=\"admin.categoryList.get('" +
                            categories[i].oId + "')\">" + Label.updateLabel + "</a>\
                            <a href='javascript:void(0)' onclick=\"admin.categoryList.del('" + categories[i].oId + "', '" +
                            encodeURIComponent(categories[i].categoryTitle) + "')\">" + Label.removeLabel + "</a> ";

                }
                that.tablePagination.updateTablePagination(categoryData, pageNum, result.pagination);
                $("#loadMsg").text("");
            }
        });
    },
    /*
     * 添加分类
     */
    add: function() {
        if (this.validate()) {
            $("#loadMsg").text(Label.loadingLabel);
            $("#tipMsg").text("");

            var requestJSONObject = {
                "categoryTitle": $("#categoryName").val(),
                "categoryURI": $("#categoryURI").val(),
                "categoryDescription": $("#categoryDesc").val()
            };

            var oId = $("#categoryName").data("oId");
            var type = "POST"
            if (oId) {
              requestJSONObject.oId = oId
              type = "PUT"
            }

            $.ajax({
                url: Label.servePath + "/console/category/",
                type: type,
                cache: false,
                data: JSON.stringify(requestJSONObject),
                success: function(result, textStatus) {
                    $("#tipMsg").text(result.msg);
                    if (!result.sc) {
                        $("#loadMsg").text("");
                        return;
                    }

                    if (!oId) {
                      if (admin.categoryList.pageInfo.currentCount === Label.PAGE_SIZE &&
                        admin.categoryList.pageInfo.currentPage === admin.categoryList.pageInfo.pageCount) {
                        admin.categoryList.pageInfo.pageCount++;
                      }
                      var hashList = window.location.hash.split("/");
                      if (admin.categoryList.pageInfo.pageCount !== parseInt(hashList[hashList.length - 1])) {
                        admin.setHashByPage(admin.categoryList.pageInfo.pageCount);
                      }
                    }

                    $("#categoryName").val("").data("oId", '');
                    $("#categoryURI").val("");
                    $("#categoryDesc").val("");

                    admin.categoryList.getList(admin.categoryList.pageInfo.pageCount);

                    $("#loadMsg").text("");
                    location.reload();
                }
            });
        }
    },
    /*
     * 获取单个分类
     * @id 用户 id
     */
    get: function(id) {
        $("#loadMsg").text(Label.loadingLabel);
        $("#tipMsg").text("");

        $.ajax({
            url: Label.servePath + "/console/category/" + id,
            type: "GET",
            cache: false,
            success: function(result, textStatus) {
                $("#tipMsg").text(result.msg);
                if (!result.sc) {
                    $("#loadMsg").text("");
                    return;
                }

                $("#categoryName").val(result.categoryTitle).data("oId", id);
                $("#categoryURI").val(result.categoryURI);
                $("#categoryDesc").val(result.categoryDescription);
                $("#categoryTags").val(result.categoryTags);

                $("#loadMsg").text("");
            }
        });
    },
    /*
     * 删除分类
     * @id 分类 id
     * @categoryName 分类名称
     */
    del: function(id, categoryName) {
        var isDelete = confirm(Label.confirmRemoveLabel + Label.categoryLabel + '"' + Util.htmlDecode(categoryName) + '"?');
        if (isDelete) {
            $("#loadMsg").text(Label.loadingLabel);
            $("#tipMsg").text("");

            $.ajax({
                url: Label.servePath + "/console/category/" + id,
                type: "DELETE",
                cache: false,
                success: function(result, textStatus) {
                    $("#tipMsg").text(result.msg);
                    if (!result.sc) {
                        $("#loadMsg").text("");
                        return;
                    }

                    var pageNum = admin.categoryList.pageInfo.currentPage;
                    if (admin.categoryList.pageInfo.currentCount === 1 && admin.categoryList.pageInfo.pageCount !== 1 &&
                            admin.categoryList.pageInfo.currentPage === admin.categoryList.pageInfo.pageCount) {
                        admin.categoryList.pageInfo.pageCount--;
                        pageNum = admin.categoryList.pageInfo.pageCount;
                    }
                    var hashList = window.location.hash.split("/");
                    if (pageNum !== parseInt(hashList[hashList.length - 1])) {
                        admin.setHashByPage(pageNum);
                    }
                    admin.categoryList.getList(pageNum);

                    $("#loadMsg").text("");
                    location.reload();
                }
            });
        }
    },
    /*
     * 验证字段
     * @status 更新或者添加时进行验证
     */
    validate: function(status) {
        if (!status) {
            status = "";
        }
        var categoryName = $("#categoryName" + status).val().replace(/(^\s*)|(\s*$)/g, "");
        if (2 > categoryName.length || categoryName.length > 32) {
            $("#tipMsg").text(Label.categoryTooLongLabel);
            $("#categoryName" + status).focus();
        } else {
            return true;
        }
        return false;
    },
    /*
     * 调换顺序
     */
    changeOrder: function (id, order, status) {
        $("#loadMsg").text(Label.loadingLabel);
        $("#tipMsg").text("");

        var requestJSONObject = {
            "oId": id.toString(),
            "direction": status
        };

        $.ajax({
            url: Label.servePath + "/console/category/order/",
            type: "PUT",
            cache: false,
            data: JSON.stringify(requestJSONObject),
            success: function(result, textStatus){
                $("#tipMsg").text(result.msg);

                // Refershes the link list
                admin.categoryList.getList(admin.categoryList.pageInfo.currentPage);

                $("#loadMsg").text("");
                location.reload();
            }
        });
    }
};

/*
 * 注册到 admin 进行管理 
 */
admin.register["category-list"] = {
    "obj": admin.categoryList,
    "init": admin.categoryList.init,
    "refresh": admin.categoryList.getList
}