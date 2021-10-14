<template>
   <div class="row" style="height: 100vh">
    <div class="col-3" id="navbar-col">
      <p class="text-h2 abril text-white" style="text-align: left; padding-top: 4vh; padding-left: 2vw">Theoreticle<br>Studios</p>
      <div style="padding-left: 2vw">
        <q-btn class="transparent gemunu-thicc text-h5 text-white" label="Home"
               flat unelevated padding="0px" no-caps
               ripple="false" style="text-align: left;" /><br>
        <q-btn class="transparent gemunu-thicc text-h5 text-white" label="Blog"
               flat unelevated padding="0px" no-caps
               ripple="false" style="text-align: left;" /><br>
        <q-btn class="transparent gemunu-thicc text-h5 text-white" label="YouTube"
               flat unelevated padding="0px" no-caps
               ripple="false" style="text-align: left;" /><br>
        <q-btn class="transparent gemunu-thicc text-h5 text-white" label="Hackathons"
               flat unelevated padding="0px" no-caps
               ripple="false" style="text-align: left;" /><br>
        <q-btn-dropdown class="transparent gemunu-thicc text-h5 text-white" label="Theoreticle Games"
                        v-model="gamesDropdown" flat unelevated padding="0px" no-caps
                        ripple="false">
        </q-btn-dropdown><br>
        <transition name="fade">
          <ul v-if="gamesDropdown" class="child">
            <li class="gemunu-thicc text-h5 text-white" style="text-align: left;"><a class="plain-a" href="https://store.steampowered.com/app/1709060/Secrets_of_the_Lost_Tomb/">Steam Page</a></li>
            <li class="gemunu-thicc text-h5 text-white" style="text-align: left;"><a class="plain-a" href="https://tomb.vercel.app">Secrets of the Lost Tomb</a></li>
            <li class="gemunu-thicc text-h5 text-white" style="text-align: left;">Colony 68</li>
          </ul>
        </transition><br>
      </div>

    </div>
    <div class="col-9">
      <q-scroll-area style="height: 100%">
        <div class="row">
          <div class="col-4" style="height: 50vw">
            <div class="row article-1" style="height: 25vw;">
              <div class="article-1-overtint"></div>
              <img src="http://placekitten.com/600/600" class="card-image">
            </div>
            <div class="row article-1 q-pa-lg" style="height: 25vw;">
              <text class="text-h4 gemunu-thicc" style="padding-bottom: 0; margin-bottom: 0">
                Article Title goes here it might be kinda long
              </text>
              <q-icon color="grey-10" name="event" :size="'xs'" style="margin-right: 5px"></q-icon>
              <text class="text-h7 gemunu-smol" style="margin-right: 0.5vw">Month DD, YYYY</text>
              <q-icon color="grey-10" name="folder_open" :size="'xs'" style="margin-right: 5px"></q-icon>
              <text class="text-h7 gemunu-smol" style="margin-right: 0.5vw">Article Series/Type</text>
              <q-icon color="grey-10" name="comment" :size="'xs'" style="margin-right: 5px"></q-icon>
              <text class="text-h7 gemunu-smol">6 Comments</text>
              <text class="text-h6 gemunu-smol">
                Start of the article and a few more words go here and more and more and more and more and more and more and more words...
              </text>
              <text class="text-h6 gemunu-smol">
                Read More
              </text>
              <q-icon color="grey-10" name="navigate_next" :size="'md'" style="margin-right: 5px"></q-icon>
            </div>
          </div>
          <div class="col-4" style="height: 50vw">
            <div class="row article-2" style="height: 25vw">
              <div class="article-2-overtint"></div>
              <img src="http://placekitten.com/600/600" class="card-image">
            </div>
            <div class="row article-3" style="height: 25vw;">
              <div class="article-3-overtint"></div>
              <img src="http://placekitten.com/600/600" class="card-image">
            </div>
          </div>
          <div class="col-4" style="height: 50vw">
            <div class="row article-2 q-pa-lg" style="height: 25vw">
              <text class="text-h4 gemunu-thicc" style="padding-bottom: 0; margin-bottom: 0">
                Article Title goes here it might be kinda long
              </text>
              <q-icon color="grey-10" name="event" :size="'xs'" style="margin-right: 5px"></q-icon>
              <text class="text-h7 gemunu-smol" style="margin-right: 0.5vw">Month DD, YYYY</text>
              <q-icon color="grey-10" name="folder_open" :size="'xs'" style="margin-right: 5px"></q-icon>
              <text class="text-h7 gemunu-smol" style="margin-right: 0.5vw">Article Series/Type</text>
              <q-icon color="grey-10" name="comment" :size="'xs'" style="margin-right: 5px"></q-icon>
              <text class="text-h7 gemunu-smol">6 Comments</text>
              <text class="text-h6 gemunu-smol">
                Start of the article and a few more words go here and more and more and more and more and more and more and more words...
              </text>
              <text class="text-h6 gemunu-smol">
                Read More
              </text>
              <q-icon color="grey-10" name="navigate_next" :size="'md'" style="margin-right: 5px"></q-icon>
            </div>
            <div class="row article-3 q-pa-lg" style="height: 25vw;">
              <text class="text-h4 gemunu-thicc" style="padding-bottom: 0; margin-bottom: 0">
                Article Title goes here it might be kinda long
              </text>
              <q-icon color="grey-10" name="event" :size="'xs'" style="margin-right: 5px"></q-icon>
              <text class="text-h7 gemunu-smol" style="margin-right: 0.5vw">Month DD, YYYY</text>
              <q-icon color="grey-10" name="folder_open" :size="'xs'" style="margin-right: 5px"></q-icon>
              <text class="text-h7 gemunu-smol" style="margin-right: 0.5vw">Article Series/Type</text>
              <q-icon color="grey-10" name="comment" :size="'xs'" style="margin-right: 5px"></q-icon>
              <text class="text-h7 gemunu-smol">6 Comments</text>
              <text class="text-h6 gemunu-smol">
                Start of the article and a few more words go here and more and more and more and more and more and more and more words...
              </text>
              <text class="text-h6 gemunu-smol">
                Read More
              </text>
              <q-icon color="grey-10" name="navigate_next" :size="'md'" style="margin-right: 5px"></q-icon>
            </div>
          </div>

        </div>
        <div class="row">
          <div class="col-4" style="height: 50vw">
            <div class="row article-1" style="height: 25vw;">
              <div class="article-1-overtint"></div>
              <img src="http://placekitten.com/600/600" class="card-image">
            </div>
            <div class="row article-1 q-pa-lg" style="height: 25vw;">
              <text class="text-h4 gemunu-thicc" style="padding-bottom: 0; margin-bottom: 0">
                Article Title goes here it might be kinda long
              </text>
              <q-icon color="grey-10" name="event" :size="'xs'" style="margin-right: 5px"></q-icon>
              <text class="text-h7 gemunu-smol" style="margin-right: 0.5vw">Month DD, YYYY</text>
              <q-icon color="grey-10" name="folder_open" :size="'xs'" style="margin-right: 5px"></q-icon>
              <text class="text-h7 gemunu-smol" style="margin-right: 0.5vw">Article Series/Type</text>
              <q-icon color="grey-10" name="comment" :size="'xs'" style="margin-right: 5px"></q-icon>
              <text class="text-h7 gemunu-smol">6 Comments</text>
              <text class="text-h6 gemunu-smol">
                Start of the article and a few more words go here and more and more and more and more and more and more and more words...
              </text>
              <text class="text-h6 gemunu-smol">
                Read More
              </text>
              <q-icon color="grey-10" name="navigate_next" :size="'md'" style="margin-right: 5px"></q-icon>
            </div>
          </div>
          <div class="col-4" style="height: 50vw">
            <div class="row article-2" style="height: 25vw">
              <div class="article-2-overtint"></div>
              <img src="http://placekitten.com/600/600" class="card-image">
            </div>
            <div class="row article-3" style="height: 25vw;">
              <div class="article-3-overtint"></div>
              <img src="http://placekitten.com/600/600" class="card-image">
            </div>
          </div>
          <div class="col-4" style="height: 50vw">
            <div class="row article-2 q-pa-lg" style="height: 25vw">
              <text class="text-h4 gemunu-thicc" style="padding-bottom: 0; margin-bottom: 0">
                Article Title goes here it might be kinda long
              </text>
              <q-icon color="grey-10" name="event" :size="'xs'" style="margin-right: 5px"></q-icon>
              <text class="text-h7 gemunu-smol" style="margin-right: 0.5vw">Month DD, YYYY</text>
              <q-icon color="grey-10" name="folder_open" :size="'xs'" style="margin-right: 5px"></q-icon>
              <text class="text-h7 gemunu-smol" style="margin-right: 0.5vw">Article Series/Type</text>
              <q-icon color="grey-10" name="comment" :size="'xs'" style="margin-right: 5px"></q-icon>
              <text class="text-h7 gemunu-smol">6 Comments</text>
              <text class="text-h6 gemunu-smol">
                Start of the article and a few more words go here and more and more and more and more and more and more and more words...
              </text>
              <text class="text-h6 gemunu-smol">
                Read More
              </text>
              <q-icon color="grey-10" name="navigate_next" :size="'md'" style="margin-right: 5px"></q-icon>
            </div>
            <div class="row article-3 q-pa-lg" style="height: 25vw;">
              <text class="text-h4 gemunu-thicc" style="padding-bottom: 0; margin-bottom: 0">
                Article Title goes here it might be kinda long
              </text>
              <q-icon color="grey-10" name="event" :size="'xs'" style="margin-right: 5px"></q-icon>
              <text class="text-h7 gemunu-smol" style="margin-right: 0.5vw">Month DD, YYYY</text>
              <q-icon color="grey-10" name="folder_open" :size="'xs'" style="margin-right: 5px"></q-icon>
              <text class="text-h7 gemunu-smol" style="margin-right: 0.5vw">Article Series/Type</text>
              <q-icon color="grey-10" name="comment" :size="'xs'" style="margin-right: 5px"></q-icon>
              <text class="text-h7 gemunu-smol">6 Comments</text>
              <text class="text-h6 gemunu-smol">
                Start of the article and a few more words go here and more and more and more and more and more and more and more words...
              </text>
              <text class="text-h6 gemunu-smol">
                Read More
              </text>
              <q-icon color="grey-10" name="navigate_next" :size="'md'" style="margin-right: 5px"></q-icon>
            </div>
          </div>

        </div>
      </q-scroll-area>
    </div>
  </div>
</template>

<script>
import {ref} from "vue"

export default {
  name: 'Home',
  setup () {
    var gamesDropdown = ref(false)
    return {
      gamesDropdown
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@300;500&display=swap');
#navbar-col {
  background-image: linear-gradient(rgba(31, 40, 51, 0.5), rgba(102, 252, 241, 0.3)), url("../assets/90-deg-rotatedgigabyte.png");
  background-repeat: no-repeat, no-repeat;
  background-size: cover, cover;
  position: sticky;
  height: 100%;
}
.abril {
  font-family: "Abril Fatface";
}

.gemunu-thicc {
  font-family: "Gemunu Libre";
  font-weight: 500;
}

.gemunu-smol {
  font-family: "Gemunu Libre";
  font-weight: 300;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

ul {
  list-style-type: none;
  padding-left: 1vw;
  margin-top: 0;
}

.plain-a {
  text-decoration: none;
  color: inherit;
}

.card-image {
  max-width: 100%;
  max-height: 100%;
}

.article-1:hover .article-1-overtint {
  background: rgba(93, 0, 29, 0.5);
}

.article-1-overtint {
  position: absolute;
  width: 33.3333333333333%;
  height: 50vw;
  transition: all 0.3s linear;
}


.article-2:hover .article-2-overtint {
  background: rgba(93, 0, 29, 0.5);
}

.article-2-overtint {
  position: absolute;
  width: 66.666666666667%;
  height: 25vw;
  transition: all 0.3s linear;
}

.article-3:hover .article-3-overtint {
  background: rgba(93, 0, 29, 0.5);
}

.article-3-overtint {
  position: absolute;
  width: 66.666666666667%;
  height: 25vw;
  transition: all 0.3s linear;
}

html {
  overflow: hidden
}

</style>
