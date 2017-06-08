<template>
  <li @mouseenter="showSubMenu" @mouseleave="hideSubMenu" class="nav-menu-wrap">
    <a :href="menuUrl">
      {{ menuName }}
    </a>
    <transition name="drop-down">
      <ul v-if="isShowSubMenu" @mouseenter="keepSubMenu" @mouseleave="noKeepSubMenu" class="submenu-wrap">
        <li v-for="subMenu in subMenus">
          <a>{{ $t(subMenu.nameVar) }}</a>
        </li>
      </ul>
    </transition>
  </li>
</template>
<script>
export default {
  props: {
    menuName: {
      type: String,
      default: ''
    },
    menuUrl: {
      type: String,
      default: ''
    },
    subMenus: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      x: 'world',
      isKeepSubMenu: false,
      isShowSubMenu: false
    };
  },
  methods: {
    showSubMenu() {
      if (this.subMenus.length !== 0) {
        this.isShowSubMenu = true;
      }
    },
    hideSubMenu() {
      if (!this.isKeepSubMenu) {
        this.isShowSubMenu = false;
      }
    },
    keepSubMenu() {
      this.isKeepSubMenu = true;
    },
    noKeepSubMenu() {
      this.isKeepSubMenu = false;
    }
  }
};
</script>

<style lang='scss' scoped>
@import '../assets/css/consts.scss';

.nav-menu-wrap {
  position: relative;

  ul {
    border-top: solid 2px $primaryColor;
    width: 150px;
    @include box-shadow(5px 5px 10px -2px rgba(0, 0, 0, 0.25));
    z-index: 1002;
    position: absolute;
    top: 48px;
    left: 0;
    text-align: left;
    background: $navbarBackground;
    padding: 10px;

    li {
      display: block;
      margin-bottom: 7px;

      a {
        padding: 5px 8px;
        display: block;
        line-height: 1.2;
        letter-spacing: 0px;
        font-family: $controlFont;
        font-size: 14px;
        text-transform: uppercase;
        color: $whiteFontColor;
        margin: 0;
        text-decoration: none;

        &:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
        }

        &:hover {
          color: $primaryColor;
        }
      }
    }

    &:before {
      position: absolute;
      top: -16px;
      left: 42px;

      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      pointer-events: none;
      border-bottom-color: $primaryColor;
      border-width: 8px;
      margin-left: -8px;
    }
  }
}

.drop-down-enter-active,
.drop-down-leave-active {
  transition: all .3s ease-in-out;
}

.drop-down-enter {
  @include transform(translateY(10px));
  opacity: 0;
}

.drop-down-leave-active {
  @include transform(scale(1.3, 0));
  opacity: 0;
}
</style>
