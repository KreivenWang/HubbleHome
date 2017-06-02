<template>
  <li @mouseenter="showSubMenu" @mouseleave="hideSubMenu" class="nav-menu-wrap">
    <a :href="menuUrl">
      {{ menuName }}
    </a>
    <transition name="drop-down">
      <ul v-if="isShowSubMenu" @mouseenter="keepSubMenu" @mouseleave="noKeepSubMenu" class="submenu-wrap">
        <li v-for="subMenu in subMenus" class="submenu-item-wrap">
          <a class="submenu-item">{{ $t(subMenu.nameVar) }}</a>
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

<style scoped>
.nav-menu-wrap {
  position: relative;
}

.submenu-wrap {
  border-top: solid 2px var(--themeColor);
  width: 120px;
  -webkit-box-shadow: 5px 5px 10px -2px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 5px 5px 10px -2px rgba(0, 0, 0, 0.25);
  box-shadow: 5px 5px 10px -2px rgba(0, 0, 0, 0.15);
  z-index: 1002;
  position: absolute;
  top: 48px;
  left: 0;
  text-align: left;
  background: #333;
  padding: 10px;
}

.drop-down-enter-active,
.drop-down-leave-active {
  transition: all .25s ease-in-out;
}

.drop-down-enter {
  transform: translateY(10px);
  opacity: 0;
}

.drop-down-leave-active {
  transform: translateY(10px);
  opacity: 0;
}


.submenu-item-wrap {
  display: block;
  margin-bottom: 7px;
}

.submenu-item {
  padding: 2px 0;
  display: block;
  line-height: 1.2;
  letter-spacing: 0px;
  font-family: 'Microsoft YaHei', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 350;
  color: #eeeeee;
  margin: 10px 15px;
  text-decoration: none
}

.submenu-item:last-child {
  margin-bottom: 0;
}

.submenu-item:hover {
  font-family: 'Microsoft YaHei', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 350;
  color: var(--themeColor);
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
  text-decoration: none
}

.submenu-item:hover a,
.submenu-item:focus a {
  color: #fff;
}

.submenu-wrap::before {
  position: absolute;
  top: -16px;
  left: 42px;

  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  pointer-events: none;
  border-bottom-color: var(--themeColor);
  border-width: 8px;
  margin-left: -8px;
}
</style>
