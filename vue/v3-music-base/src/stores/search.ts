import {defineStore} from 'pinia'
import {getSearchSuggest} from '@/api/index'
import type {SearchSuggest} from '@/models/search'
export const useSearchStore = defineStore('search', {
  state:() =>{
    return {
      showSearchView:false,
      searchKeyword:'',
      suggestData:{} as SearchSuggest
    }
  },
  getters:{
    showHot:state => state.searchKeyword === ''
  },
  actions:{
    async suggest() {
      // ref 不一样 proxy
      this.suggestData = await getSearchSuggest(this.searchKeyword)
    }
  }
})