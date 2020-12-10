<template>
  <v-container fluid>
    <v-row class="mx-auto mt-5" align-center>
      <v-col cols="6" sm="12" md="6">
        <v-layout align-start>
          <v-hover>
            <template v-slot:default="{ hover }">
          <v-card
              style="border-radius: 30px;background-color: steelblue;border-left: 7px solid darkslateblue;"
              class=" overflow-hidden transition-swing"
              height="300"
              width="100%"
              :class="`elevation-${hover ? 17 : 6}`"
          >
            <v-img src="@/assets/male_mask.png"
                   style="opacity: 0.7;
                        margin-left: 370px;
                        position: absolute;
                        width: 55%;
                        height: 100%"
                   class="pa-lg-13"/>
              <v-card-title style="color: whitesmoke;position: relative;font-size: 32px;font-weight:bold;opacity: .7">Today cases</v-card-title>
              <v-card-text style="font-weight: bold;color: white;font-size: 40px;" class="mx-3 pt-15">{{ todayConfirm }} cases.</v-card-text>
            <v-card-actions
                style="position: absolute;bottom: 0"
            >
              <v-list-item>
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                      class="elevation-6"
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title style="color: whitesmoke;opacity: .7">Update : {{ updateDate }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-card>
            </template>
          </v-hover>
        </v-layout>
      </v-col>
      <v-col cols="6" sm="12" md="6">
        <v-layout  align-end>
          <v-hover>
            <template v-slot:default="{ hover }">
          <v-card
              style="border-radius: 30px;background-color: steelblue;border-left: 7px solid darkslateblue;"
              class="overflow-hidden transition-swing"
              height="300"
              width="100%"
              :class="`elevation-${hover ? 17 : 6}`"
          >
            <v-img src="@/assets/female_mask.png"
                   style="opacity: 0.7;
                        margin-left: 370px;
                        position: absolute;
                        width: 55%;
                        height: 100%"
                   class="pa-lg-13"/>
            <v-card-title style="color: whitesmoke;position: relative;font-size: 32px;font-weight:bold;opacity: .7">Total case</v-card-title>
            <v-card-text style="font-weight: bold;color: white;font-size: 40px;" class="mx-3 pt-15">{{ totalConfirm }} cases.</v-card-text>
            <v-card-actions
                style="position: absolute;bottom: 0"
            >
              <v-list-item>
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                      class="elevation-6"
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title style="color: whitesmoke;opacity: .7">Update : {{ updateDate }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-card>
            </template>
          </v-hover>
        </v-layout>
      </v-col>
    </v-row>
    <v-row class="mt-15" style="background-color: white;height: 100%;border-top-left-radius: 150px;">
      <v-col>
        <v-row>
          <v-col class="pa-13" cols="12" style="margin-left: 17px">
            <h1 style="color: darkblue;opacity: .8;font-size: 38px;margin-left: 20px">Coronavirus Disease 2019 (COVID-19)</h1>
            <ul style="padding-right:100px;opacity: .8;font-size: 17px;margin-left: 20px" class="mt-2">
              <li>Check your body temperature every day</li>
              <li>Observe your fever (≥37.5C) and respiratory symptoms (cough, sore throat, difficulty breathing) and signs of fever</li>
              <li>If you have a fever accompanied by at least
                one of these symptoms, you are to inform
                a disease control officer immediately</li>
            </ul>
            <ul style="padding-right:100px;opacity: .8;font-size: 17px;margin-left: 20px" class="mt-4">
              <li>วัดอุณหภูมิร่างกายตนเองทุกวัน</li>
              <li>สังเกตอาการไข้ ไอ น้้ามูก เจ็บคอ หายใจลำบาก ครั่นเนื้อตัว และอื่นๆ</li>
              <li>หากมีอุณหภูมิร่างกาย 37.5 องศาขึ้นไป
                หรือพบอาการผิดปกติอย่างใดอย่างหนึ่ง
                ให้แจ้งเจ้าหน้าที่ในพื้นที่ทราบทันที
              </li>
            </ul>
            <v-divider style="margin-top: 40px;margin-bottom: -40px"></v-divider>
          </v-col>
        </v-row>
        <v-row >
          <v-col cols="12" sm="12" md="6" class="pr-10">
            <v-row class="pl-16 pr-16" style="margin: auto">
              <v-col cols="12">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                        style="background-color: steelblue;border-radius: 20px;border-left: 8px solid darkslateblue"
                        class="transition-swing cardStats"
                        :class="`elevation-${hover ? 10 : 2}`">
                      <v-img
                          class="hidden-md-and-down"
                          src="@/assets/hospital.png"
                          style="
                            opacity: .7;
                            margin-top: 15px;
                            height: auto;
                            right: 0;
                            position: absolute;
                            max-width: 190px;"/>
                      <v-card-title class="titleState">Hospital</v-card-title>
                      <v-card-text style="font-weight: bold;font-size: 30px;color: white" class="pt-5">{{ totalHospital }} cases.</v-card-text>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
            </v-row>
            <v-row class="pl-16 pr-16" style="margin: auto">
              <v-col cols="12">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                        style="background-color: darkseagreen;border-radius: 20px;border-left: 8px solid darkolivegreen"
                        class="transition-swing cardStats"
                        :class="`elevation-${hover ? 10 : 2}`">
                          <v-img
                              class="hidden-md-and-down"
                              src="@/assets/house.png"
                              style="
                            opacity: .7;
                            margin-top: 15px;
                            height: auto;
                            right: 0;
                            position: absolute;
                            max-width: 190px;"/>
                      <v-card-title class="titleState">Recovered</v-card-title>
                      <v-card-text style="font-weight: bold;font-size: 30px;color: white" class="pt-5">{{ totalRecovered }} cases.</v-card-text>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
            </v-row>
            <v-row class="pl-16 pr-16" style="margin: auto">
              <v-col cols="12">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                        style="background-color: darkgrey;border-radius: 20px;border-left: 8px solid black"
                        class="transition-swing cardStats"
                        :class="`elevation-${hover ? 10 : 2}`">
                          <v-img
                              class="hidden-md-and-down"
                              src="@/assets/black-ribbon.png"
                              style="
                                opacity: .7;
                                margin-top: 15px;
                                height: auto;
                                position: absolute;
                                right: 0;
                                max-width: 190px;"/>
                      <v-card-title class="titleState">Death</v-card-title>
                      <v-card-text style="font-weight: bold;font-size: 30px;color: white" class="pt-5">{{ totalDeath }} deaths.</v-card-text>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12"  sm="12" md="6">
            <h1 style="opacity: .8;color: darkslategrey" class="pl-6 pb-1">Quarantine</h1>
            <v-card style="background-color: darkslateblue;opacity: .9;border-radius: 35px;border-top: 8px solid steelblue;border-right: 10px solid steelblue"
                    class="elevation-6"
                    min-height="385px">
              <v-img
                  src="@/assets/public_health.png"
                  style="
                        margin-left: -100px;
                        margin-top: 15px;
                        height: auto;
                        position: absolute;
                        max-width: 260px;"/>
              <v-card-title style="color: white;font-size: 29px;margin-left: 125px">การปฏิบัติตัวระหว่างการกักกัน</v-card-title>
              <v-card-text style="font-size: 16px;color: whitesmoke;opacity: .75;padding-right: 10px;max-height: 300px;overflow: hidden" class="mt-3 col-sm-12">
                <li style="margin-left: 150px">อยู่ในที่พักอาศัย 14 วัน นับจากวันเดินทางถึงประเทศไทย</li>
                <li style="margin-left: 160px">ไม่รับประทานอาหารและใช้ภาชนะร่วมกับผู้อื่น</li>
                <li style="margin-left: 165px">ล้างมือบ่อยๆ ด้วยน้้าและสบู่ นาน 20 วินาที</li>
                <li style="margin-left: 164px">เมื่อต้องอยู่กับผู้อื่น ต้องสวมหน้ากากอนามัย และอยู่ห่างจากคนอื่น 1-2 เมตร</li>
                <li style="margin-left: 160px">หลีกเลี่ยงการพูดคุย ใกล้ชิดกับคนอื่น โดยเฉพาะผู้สูงอายุ</li>
                <li style="margin-left: 150px">การทิ้งหน้ากากอนามัย ให้ทิ้งใส่ถุงพลาสติก ปิดถุงให้สนิท</li>
                <li style="margin-left: 131px">เมื่อไอ จามให้ใช้ทิชชูปิดปาก ปิดจมูกถึงคางทุกครั้งล้างทําความสะอาดมือด้วยสบู่</li>
                <li style="margin-left: 105px">ล้างทําความสะอาดมือด้วยแอลกอฮอล์ 70 เปอร์เซ็นต์ขึ้นไป</li>
              </v-card-text>
              <v-row class="pr-8" justify="end" align="end" >
                <h4
                    style="bottom: 3%;position: absolute;font-weight: initial;color: white;opacity: .8;"
                    class="hidden-sm-and-down"
                >กระทรวงสาธารณสุข 08/12/2563</h4>
              </v-row>
            </v-card>
            <v-card style="background-color: darkslateblue;opacity: .9;border-radius: 35px;border-top: 8px solid steelblue;border-right: 10px solid steelblue"
                    class="elevation-6 mt-10 mb-10 pr-2"
                    min-height="385px">
              <v-img
                  src="@/assets/passport.png"
                  style="
                        margin-left: -100px;
                        margin-top: 15px;
                        height: auto;
                        position: absolute;
                        max-width: 240px;"/>
              <v-card-title style="color: white;font-size: 29px;margin-left: 125px">เดินทางกลับจากพื้นที่ระบาดของโรค</v-card-title>
              <v-card-text style="font-size: 16px;color: whitesmoke;opacity: .75;padding-right: 10px;max-height: 300px;overflow: hidden" class="mt-3 col-sm-12">
                <li style="margin-left: 150px">ผู้ที่จะเดินทางควรเตรียมร่างกายให้พร้อม หากมีโรคประจําตัว ควรระมัดระวัง</li>
                <li style="margin-left: 142px">เน้นการรักษาสุขอนามัยส่วนบุคคล เช่น การล้างมือบ่อยๆ ด้วยน้ำและสบู่</li>
                <li style="margin-left: 134px">หลีกเลี่ยงการเข้าไปพื้นที่แออัด หรือที่ชุมชนสาธารณะที่มีคนอยู่เป็นจํานวนมาก</li>
                <li style="margin-left: 126px">เมื่อต้องอยู่กับผู้อื่น ต้องสวมหน้ากากอนามัย และอยู่ห่างจากคนอื่น 1-2 เมตร</li>
                <li style="margin-left: 119px">ระหว่างการเดินทาง หากมีอาการไข้ ไอ เจ็บคอ หรือมีน้ำมูก ควรไปพบแพทย์ทันที</li>
                <li style="margin-left: 111px">เมื่อจะเดินทางกลับประเทศไทยหากมีอาการป่วยต้องแจ้งให้เจ้าหน้าที่ทราบ</li>
                <li style="margin-left: 101px">สังเกตอาการตนเอง วัดไข้ตนเองด้วยปรอทวัดไข้ทุกวัน จนครบ 14 วัน</li>
                <li style="margin-left: 93px">ให้ความร่วมมือปฏิบัติตามขั้นตอนการคัดกรองผู้เดินทาง และมาตรการป้องกันควบคุมโรค</li>
              </v-card-text>
              <v-row class="pr-8" justify="end" align="end" >
                <h4
                    style="bottom: 3%;position: absolute;font-weight: initial;color: white;opacity: .8;"
                    class="hidden-sm-and-down"
                >กระทรวงสาธารณสุข 27/02/2563</h4>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods:{

  },
  computed: {
    totalConfirm() {
      return this.$store.getters.totalConfirm
    },
    todayConfirm(){
      return this.$store.getters.todayCase
    },
    totalDeath(){
      return this.$store.getters.totalDeaths
    },
    totalRecovered() {
      return this.$store.getters.totalRecovered
    },
    totalHospital() {
      return this.$store.getters.totalHospital
    },
    updateDate() {
      return this.$store.getters.update
    }

  }

}
</script>

<style scoped>
li{
  margin-bottom: 5px;
}
.titleState{
  color: white;
  opacity: .7;
  font-size: 25px;
  font-weight: bolder;
}
.cardStats{
  overflow: hidden;
  opacity: .8;
  width: 100%;
  height: 190px;
}
</style>