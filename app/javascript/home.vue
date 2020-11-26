<template>
  <div id="app">
    <div class="landing">
      <h1 class="heading">Next generation Git project hosting</h1>
      <h2 class="sub-heading">A free and ethical SCM service that you can host on your own hardware for free.</h2>
      <a class="join-btn" href="/signup">
        <div class="label">Join Us</div>
        <div class="circle">
          <font-awesome-icon icon="cheveron-right" />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style lang="scss" scoped>
.landing {
  font-family: Overpass, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  margin: 0 auto;
  margin-bottom: 70px;
  max-width: 1100px;
  overflow: visible;
  padding: 60px 80px;
  width: 100%;
}

@media(max-width:1040px) {
	.landing {
		border-radius: 0;
		padding: 70px 50px;
	}
}

@media(max-width:760px) {
	.landing {
		padding: 70px 40px;
		padding-bottom: 30px;
	}
}

@media(max-width:410px) {
	.landing {
		padding: 70px 30px;
	}
}

@media(max-width:350px) {
	.landing {
		padding: 70px 15px;
  }
}

.heading {
  color: #f0f3f6;
  font-size: 3.2rem;
  font-weight: 700;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media(max-width:350px) {
	.heading {
		font-size: 2.4rem;
	}
}

.sub-heading {
	color: #acd5f2;
	font-size: 2.1rem;
	line-height: 142%;
	margin: 0 auto;
	max-width: 370px;
	text-align: center;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

@media(max-width:350px) {
	.sub-heading {
		font-size: 1.8rem;
	}
}

.join-btn {
	align-items: center;
	background: #3577ff;
	border-radius: 30px;
	box-shadow: 0 2px 40px rgba(0, 0, 0, .4);
	display: grid;
	grid-template-columns: auto 38px;
	height: 49px;
	padding-left: 20px;
	padding-right: 7px;
	width: 200px;
	margin: 0 auto;
	margin-bottom: -78px;
	transition: box-shadow .4s ease;
}

.join-btn .label {
	color: #f7fafc;
	font-size: 1.8rem;
	font-weight: 800;
	text-align: center;
}

.join-btn .circle {
	background: #d9e6ff;
	color: #3577ff;
	font-size: 2rem;
	height: 37px;
	padding-left: 3px;
	width: 37px;
}

.join-btn:hover {
	box-shadow: 0 2px 43px rgba(8, 150, 230, .6);
}

@media(max-width:1040px) {
	.join-btn {
		margin-bottom: -90px;
	}
}

@media(max-width:760px) {
	.join-btn {
		margin-bottom: -50px;
	}
}

@media(max-width:410px) {
	.join-btn {
		margin-bottom: -90px;
	}
}
</style>
