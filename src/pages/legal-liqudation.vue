<template lang="html">
  <secondaryIntro caption="Ликвидация ООО" :bottomLimitScroll="150">
    <span class="secondary__paragraph">
      Официальная процедура закрытия ООО в Хабаровске – длительная и серьезная.
      Фирма считается ликвидированной и прекратившей своё существование с момента
      внесения записи об этом в Единый государственный реестр юридических лиц (ЕГРЮЛ).
    </span>

    <span class="secondary__paragraph">
      Учредители ООО не отвечают своим личным имуществом за последствия деятельности фирмы,
      поэтому процедура ликвидации ООО под ключ сопряжена с некоторыми сложностями, в частности,
      требует тщательной подготовки всего пакета документов и соблюдения всех требований,
      предусмотренных законодательством Российской Федерации.
    </span>

    Если Вы не уверены, что справитесь с ликвидацией предприятия самостоятельно,
    то рекомендуем обратиться к нам за помощью.
  </secondaryIntro>

  <div class="secondary__wrapper">
    <h3 class="secondary-list__caption liqudation__caption">Сэкономьте до 200 тысяч рублей, ликвидируя ООО с "ООО ПрофиксДв"</h3>

    <div class="liqudation__wrapper">
      <ul class="liqudation__list">
        <li class="liqudation__item" v-for="(item, index) in liqudationList0" :key="index">
          <button name="list-toggler" class="liqudation__item__button">
            {{ item.header }}
            <moreIcon />
          </button>
          <p class="liqudation__list__text" v-show="index == 0">{{ item.text }}</p>
        </li>
      </ul>

      <ul class="liqudation__list">
        <li class="liqudation__item" v-for="(item, index) in liqudationList1" :key="index">
          <button name="list-toggler" class="liqudation__item__button">
            {{ item.header }}
            <moreIcon />
          </button>
          <p class="liqudation__list__text" v-show="index == 0">{{ item.text }}</p>
        </li>
      </ul>

    </div>

    <saleBlock />

    <div class="liqudation__calculator">
      <calculatorLegal />
    </div>

  </div>
</template>

<script setup>
import secondaryIntro from '../components/secondary-intro'
import moreIcon from '../icons/more-icon'
import calculatorLegal from '../components/calculator-legal'
import saleBlock from '../components/sale-block'

const liqudationList0 = [
  {
    header: 'Стандартная ликвидация',
    text: 'Стандартная, регламентированная процедура, регулируемая законом об обществах с ограниченной ответственностью. ИФНС проводит налоговую проверку, фирма закрывает все свои долги. Конечный результат - удаление записи из единого государственного реестра, иными словами, фирма официально перестает существовать, у нее нет долгов.'
  },
  {
    header: 'Добровольная ликцидация',
    text: 'Стандартная, регламентированная процедура, регулируемая законом об обществах с ограниченной ответственностью. ИФНС проводит налоговую проверку, фирма закрывает все свои долги. Конечный результат - удаление записи из единого государственного реестра, иными словами, фирма официально перестает существовать, у нее нет долгов.'
  },
  {
    header: 'Принудительная ликвидация',
    text: 'Стандартная, регламентированная процедура, регулируемая законом об обществах с ограниченной ответственностью. ИФНС проводит налоговую проверку, фирма закрывает все свои долги. Конечный результат - удаление записи из единого государственного реестра, иными словами, фирма официально перестает существовать, у нее нет долгов.'
  },
  {
    header: 'Банкротство предприятия',
    text: 'Стандартная, регламентированная процедура, регулируемая законом об обществах с ограниченной ответственностью. ИФНС проводит налоговую проверку, фирма закрывает все свои долги. Конечный результат - удаление записи из единого государственного реестра, иными словами, фирма официально перестает существовать, у нее нет долгов.'
  }
]

const liqudationList1 = [
  {
    header: 'Альтернативная ликвидация',
    text: 'Смена директора и учредителей ООО. Собственники предприятия избавляются посредством реорганизации или продажи. достоинства способа - отсутствие налоговой проверки, быстрота и относительная дешевизна. Недостатки - сохраняется ответственность бывших собственников и руководства за все действия фирмы в период существования, а также вероятные проблемы с законодательством РФ.'
  },
  {
    header: 'Присоединение к другой организации',
    text: 'Смена директора и учредителей ООО. Собственники предприятия избавляются посредством реорганизации или продажи. достоинства способа - отсутствие налоговой проверки, быстрота и относительная дешевизна. Недостатки - сохраняется ответственность бывших собственников и руководства за все действия фирмы в период существования, а также вероятные проблемы с законодательством РФ.'
  },
  {
    header: 'Смена директора и учредителей',
    text: 'Смена директора и учредителей ООО. Собственники предприятия избавляются посредством реорганизации или продажи. достоинства способа - отсутствие налоговой проверки, быстрота и относительная дешевизна. Недостатки - сохраняется ответственность бывших собственников и руководства за все действия фирмы в период существования, а также вероятные проблемы с законодательством РФ.'
  },
  {
    header: 'Ликвидация через оффшор',
    text: 'Смена директора и учредителей ООО. Собственники предприятия избавляются посредством реорганизации или продажи. достоинства способа - отсутствие налоговой проверки, быстрота и относительная дешевизна. Недостатки - сохраняется ответственность бывших собственников и руководства за все действия фирмы в период существования, а также вероятные проблемы с законодательством РФ.'
  },
  {
    header: 'Реорганизация ООО',
    text: 'Смена директора и учредителей ООО. Собственники предприятия избавляются посредством реорганизации или продажи. достоинства способа - отсутствие налоговой проверки, быстрота и относительная дешевизна. Недостатки - сохраняется ответственность бывших собственников и руководства за все действия фирмы в период существования, а также вероятные проблемы с законодательством РФ.'
  }
]
</script>

<style lang="css" src="../assets/style/liqudation/liqudation-desktop.css"></style>
<style lang="css" src="../assets/style/liqudation/liqudation-middle.css"></style>
<style lang="css" src="../assets/style/liqudation/liqudation-mobile.css"></style>
