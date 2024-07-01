<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark position-sticky top-0" style="background-color: #7e3c22 !important;">
        <div class="container-fluid">
            <RouterLink to="/" class="navbar-brand nav-link ps-0">Royal Myanmar</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="languageDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-globe"></i> JP
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="languageDropdown">
                            <li><a class="dropdown-item" href="#">Japanese</a></li>
                            <li><a class="dropdown-item" href="#">Korean</a></li>
                            <li><a class="dropdown-item" href="#">English</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link">トップページ</RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            メニューリスト
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><h6 class="dropdown-header">食べ物メニュー</h6></li>
                            <li>
                                <RouterLink to="/friedFoodMenu" class="dropdown-item">揚げ物・炒め物</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/riceMenu" class="dropdown-item">お米メニュー</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/saladMenu" class="dropdown-item">サラダ物</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/soupMenu" class="dropdown-item">スープ</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/quickMenu" class="dropdown-item">クイックメニュー</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/specialMenu" class="dropdown-item">一週間前注文</RouterLink>
                            </li>
                            <li><hr class="dropdown-divider"></li>
                            <li><h6 class="dropdown-header">飲み物メニュー</h6></li>
                            <li>
                                <RouterLink to="/alcohol" class="dropdown-item">アルコール</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/softdrink" class="dropdown-item">ソフトドリンク</RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/aboutUs" class="nav-link">当店について</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/notification" class="nav-link">お知らせ</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/access" class="nav-link">アクセス</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>