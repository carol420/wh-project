<template>
  <div class="">
    <ul id="element"></ul>
    <div id='result'></div>
    <button v-on:click='click1'>1</button>
    <button v-on:click='click2'>2</button>
    <button v-on:click='click3'>3</button>
    <button v-on:click='click4'>4</button>


    <ul id='list'></ul>
  </div>
</template>
<!-- <script type="text/template" id="tpl">
  <% for(var i = 0; i < list.length; i++) { %>
    <% var item = list[i] %>
      <li>
        <span><%=item.firstName%> <%=item.lastName%></span>
        <span><%-item.city%></span>
      </li>
      <% } %>
</script> -->
<script>
import _ from 'underscore'
import $ from 'jquery'
import axios from 'axios'
export default {
  name: 'EgCom',
  data() {
    return {
      basket: {
        count: 22,
        onSale: 18
      }

    }
  },

  created() {
    // var list = [
    //   { firstName: '<a href="#">Zhang</a>', lastName: 'San', city: 'Shanghai' },
    //   { firstName: 'Li', lastName: 'Si', city: '<a href="#">Beijing</a>' },
    //   { firstName: 'Wang', lastName: 'Wu', city: 'Guangzhou' },
    //   { firstName: 'Zhao', lastName: 'Liu', city: 'Shenzhen' }
    // ]
    // var element = $('#element'),
    //   tpl = $('#tpl').html();
    // console.log($('#element'))
    // var html = _.template(tpl, list);
    // // 将解析后的内容填充到渲染元素  
    // element.html(html);

  },
  methods: {
    click1() {
      $('#result').html(null)
      $('#result').append(
        'There are <b>' + this.basket.count + '</b> ' +
        'items in your basket, ' +
        '<em>' + this.basket.onSale +
        '</em> are on sale!'
      );
    },
    click2() {
      $('#result').html(null)
      $('#result').append(`
        There are <b>${this.basket.count}</b> items
         in your basket, <em>${this.basket.onSale+3}</em>
        are on sale!
      `);
    },
    click3(){
      $('#list').html(`
        <ul>
          <li>first</li>
          <div>ceshi</div>
          <li>second</li>
        </ul>
        `)
    },
     click4(){
      let addrs=[1,4]
      $('#list').html(`
        <table>
          ${addrs.map(addr => `
            <tr><td>${addr}</td></tr>
            <tr><td>${addr}</td></tr>
          `).join('')}
          </table>
        `)
    }
  }
}

</script>
<style scoped>
  table{
    width: 100px;
    height: 100px;
    boder:1px solid #ccc;
  }

</style>
