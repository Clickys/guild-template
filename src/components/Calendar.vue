<template>
    <v-container fill-height fluid>
        <v-layout>
            <v-flex>
                <v-sheet height="100%">
                    <v-calendar
                        color="red"
                        darken-2
                        now=""
                        value=""
                        dark
                        event-color="red"
                        :events="events"
                    ></v-calendar>
                </v-sheet>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        events: [
            {
                name: 'Raid',
                start: '2019-07-29',
                end: '2019-07-29'
            }
        ]
    })
};
</script>


<style scoped>
</style>
