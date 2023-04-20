<template>
    <!-- 布局组件 -->
    <div class="layout-container">

        <div class="container">
            <!-- 头部 -->
            <header>
                <slot name="header"></slot>
            </header>
            <!-- 主区域 -->
            <main class="maincontainer">
                <slot name="maincontent"></slot>
            </main>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.layout-container {
    width: 100%;
    height: 100%;
    background-color: #5B6FB5;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;

    .container {
        width: 100%;
        height: 100%;
        .maincontainer {
            flex: 1;
            overflow: hidden;
            height: 100%;
        }
    }

}
</style>