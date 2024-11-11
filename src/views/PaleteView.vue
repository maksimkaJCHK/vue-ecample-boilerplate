<template>
  <ui-container class="about-page">
    <h1>Palete</h1>

    <div class="about-page-row flex">
      <ui-button>
        Type
      </ui-button>

      <ui-button disabled="true">
        Type
      </ui-button>
    </div>
    <div class="about-page-row flex">
      <ui-button typeBtn="secondary">
        Secondary
      </ui-button>

      <ui-button typeBtn="secondary" disabled="true">
        Secondary
      </ui-button>
    </div>
    <div class="about-page-row flex">
      <ui-button typeBtn="success">
        Success
      </ui-button>

      <ui-button typeBtn="success" disabled="true">
        Success
      </ui-button>
    </div>
    <div class="about-page-row flex">
      <ui-button typeBtn="info">
        Info
      </ui-button>

      <ui-button typeBtn="info" disabled="true">
        Info
      </ui-button>
    </div>
    <div class="about-page-row flex">
      <ui-button typeBtn="warning">
        Warning
      </ui-button>

      <ui-button typeBtn="warning" disabled="true">
        Warning
      </ui-button>
    </div>
    <div class="about-page-row flex">
      <ui-button typeBtn="danger">
        Danger
      </ui-button>

      <ui-button typeBtn="danger" disabled="true">
        Danger
      </ui-button>
    </div>

    <div class="about-page-row">
      <ui-info-block isOpen="true" typeBlock="error"  >
        fdfdfdfdfdfd
      </ui-info-block>
    </div>

    <div class="about-page-row">
      <ui-info-block isOpen="true" typeBlock="warning" >
        fdffdfd
      </ui-info-block>
    </div>

    <div class="about-page-row">
      <ui-info-block isOpen="true" typeBlock="success" >
        fdffdfd
      </ui-info-block>
    </div>

    <div class="about-page-row">
      <ui-info-block isOpen="true">
        fdffdfd
      </ui-info-block>
    </div>
  </ui-container>
</template>

<script>

</script>

<style lang="scss">
  .about-page {
    &-row {
      margin: 15px 0;

      &.flex {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
      }
    }
  }
</style>
