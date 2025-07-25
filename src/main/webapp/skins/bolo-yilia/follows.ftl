<#--

    Bolo - A stable and beautiful blogging system based in Solo.
    Copyright (c) 2020-present, https://github.com/bolo-blog

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

-->
<#include "../../common-template/macro-common_head.ftl">
    <!DOCTYPE html>
    <html>

    <head>
        <@head title="${followLabel} - ${blogTitle}">
            <link rel="stylesheet" href="${staticServePath}/skins/${skinDirName}/css/base.css?${staticResourceVersion}" />
        </@head>
    </head>

    <body>
        <#include "side.ftl">
            <main class="classify">
                <article>
                    <header>
                        <h2>
                            <a rel="archive" href="${servePath}/follows.html">
                                ${followLabel}
                            </a>
                        </h2>
                    </header>
                    <#if 0 !=follows?size>
                        <ul class="tags fn-clear">
                            <#list follows as follow>
                                <li>
                                    <a rel="friend" href="${servePath}/follow/articles/${follow.followTitle}" class="tag"
                                        title="${follow.followDescription}" target="_blank">
                                        <img src="${follow.followIcon!faviconAPI}" width="16" height="16" />
                                        ${follow.followTitle}
                                    </a>
                                </li>
                            </#list>
                        </ul>
                    </#if>
                </article>
                <#include "footer.ftl">
            </main>
    </body>

    </html>