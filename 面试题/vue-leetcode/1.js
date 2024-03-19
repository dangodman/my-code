// patches 的过程 我们有哪些改变要收集呢？
//  [{type:}]
// patchFlg 变量 响应式业务后生成的 哪种类型的改变
if(patchFlag & PatchFlags.CLASS) {
  if(oldProps.class !== newProps.class){
    hotPatchProp(el,'class',null,newProps.class,isSVG)
  }
}