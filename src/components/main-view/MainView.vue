<template>
<div id='hell-con'>
	<button @click='qu1'>qu1</button>
	<button @click='qu1'>qu2</button>
	<div class="layout">
		 <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
    </Layout>
	</div>
	<try-iview :propData='propData'></try-iview>
</div>
</template>
<script src='./main-view.js'></script>
<style src='./main-view.css'></style>