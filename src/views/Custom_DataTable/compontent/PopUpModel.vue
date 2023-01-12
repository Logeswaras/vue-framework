<template>
<sapn role="button" :class="popupIconColor" data-bs-toggle="modal" :data-bs-target="`#${popupId}`">
  <i :class="popupIcon"></i> {{popupBtn}}
</sapn>

<div class="modal fade text-dark" :id="popupId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">{{popupTitle}}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <slot v-for="(item,i) in items" :key="i"  :name="item.value"></slot>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" :class="popupBtnColor" @click.prevent="handleClick">{{popupBtnText}}</button>
      </div>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import {Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';
import {ModelContentModel} from '../Models/dataTable.model';

export default class PopUpModel extends Vue{
  @Prop() popupBtn:string;
  @Prop() popupTitle:string;
  @Prop() popupId:string;
  @Prop() popupIcon:string;
  @Prop() popupIconColor:string;
  @Prop() popupBtnColor:string;
  @Prop() popupBtnText:string;
  @Prop() items:Array<ModelContentModel>

  public handleClick(){
    this.$emit('onClicked')
  }
}
</script>