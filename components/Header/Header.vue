<template>
  <header class="header">
		<div class="container">
			<div class="header__actions">
				<a href="#"><i class="fa fa-sign-in"></i>Войти</a>
				<a href="#"><i class="fa fa-user-plus"></i>Регистрация</a>
				<el-badge :value="2" class="item">
					<a href="#"><i class="fa fa-shopping-cart"></i>Корзина</a>
				</el-badge>
			</div>
		</div>
	</header>
</template>
<script>
  export default {
    props: {

    },
    components: {

    },
    data() {
      return {

      }
    },
    computed: {

    },
    methods: {

    },
    created() {

    },
    mounted() {

    }
  }
</script>
<style scoped lang="sass">
	.header
		&__actions
			padding: 12px 0
</style>