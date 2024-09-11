<template>
  <div class="footer">
    <div :class="['links', isMobile ? 'lessMargin' : '']">
      <a href="https://github.com/AttigH" target="_blank">Hamza</a>
      <a href="https://github.com/AttigH" target="_blank">
        <GithubOutlined />
      </a>
    </div>
    <div class="copyright">
      Copyright Are Reserved
      <CopyrightOutlined />&nbsp;2024
      <span>HAMZA ATTIG</span>
    </div>
  </div>
</template>

<script lang="ts" setup name="GlobalFooter">
import { CopyrightOutlined, GithubOutlined } from '@ant-design/icons-vue'
import { isMobile } from '@/utils/device'
</script>

<style lang="less" scoped>
.footer {
  padding: 0 16px;
  margin: 48px 0 24px;
  text-align: center;

  .links {
    margin-bottom: 8px;

    a {
      color: rgba(0, 0, 0, 0.45);

      &:hover {
        color: rgba(0, 0, 0, 0.65);
      }

      &:not(:last-child) {
        margin-right: 40px;
      }
    }

    &.lessMargin {
      a {
        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }
  .copyright {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
}
</style>
