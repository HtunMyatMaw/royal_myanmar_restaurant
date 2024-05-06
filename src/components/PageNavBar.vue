<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark position-sticky top-0">
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
                            <li>
                                <RouterLink to="/newMenu" class="dropdown-item">新メニュー</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/singleMenu" class="dropdown-item">単品メニュー</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/drinkMenu" class="dropdown-item">ドリンクメニュー</RouterLink>
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