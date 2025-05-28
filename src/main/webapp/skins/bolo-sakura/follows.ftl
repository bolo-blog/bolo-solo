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
<#include 'header.ftl'>
<body nonce-data="4fb3a4be0d" class="home blog hfeed chinese-font">
<div class="scrollbar" id="bar">
</div>
<section id="main-container">
    <div class="headertop filter-dot">
        <#include 'macro-header.ftl'>
        <div id="content" class="site-content">
            <div id="primary" class="content-area">
                <#if pjax><!---- pjax {#pjax} start ----></#if>
                <div class="links">
                    <h3 class="link-title"><span class="fake-title">我的关注</span></h3>
                    <ul class="link-items fontSmooth">
                        <#list follows as follow>
                            <li class="link-item"><a class="link-item-inner effect-apollo" href="${servePath}/follow/articles/${follow.followTitle}" title="${follow.followTitle}" target="_blank" rel="friend"><img class="lazyload" onerror="imgError(this,1)" data-src="${follow.followIcon}" src="${follow.followIcon}"><span class="sitename">${follow.followTitle}</span>
                                    <div class="linkdes">
                                        ${follow.followDescription}
                                    </div>
                                </a></li>
                        </#list>
                    </ul>
                </div>
                <#if pjax><!---- pjax {#pjax} end ----></#if>
            </div>
        </div>
    </div>
    <#include 'macro-footer.ftl'>
</section>
<#include 'side-mobile.ftl'>
<#include 'footer.ftl'>
</body>
</html>