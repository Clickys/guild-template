<template>
    <v-container fill-height fluid>
        <v-layout align-content-center>
            <v-flex xs12 md12>
                <v-sheet height="80%">
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
            },
            {
                name: 'Meeting @ 20:00',
                start: '2019-08-02',
                end: '2019-08-02',
                color: 'green'
            }
        ]
    })
};
</script>


<style scoped>
</style>
