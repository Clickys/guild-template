<template>
    <v-container fluid fill-height class="grey" darken-4>
        <v-layout row wrap>
            <v-flex>
                <v-simple-table dark>
                    <thead>
                        <tr>
                            <th class="text-left">Nickname</th>
                            <th class="text-left">Class</th>
                            <th class="text-left">Role</th>
                            <th class="text-left"></th>
                            <th class="text-left">
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on }">
                                        Filter
                                        <v-icon v-on="on" small
                                            >mdi-chevron-down</v-icon
                                        >
                                    </template>
                                    <v-list dark>
                                        <v-list-item
                                            v-for="(filter, index) in filters"
                                            :key="index"
                                        >
                                            <v-list-item-title
                                                @click="show(filter.name)"
                                                :style="{ cursor: 'pointer' }"
                                                >{{
                                                    filter.name
                                                }}</v-list-item-title
                                            >
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(member, index) in filteredMembers"
                            :key="member.nickname + index"
                        >
                            <td>{{ member.nickname }}</td>
                            <td>
                                {{ member.class }}
                            </td>
                            <td>
                                <v-chip
                                    pill
                                    class="red font-weight-bold"
                                    v-if="member.role"
                                >
                                    {{ member.role }}
                                </v-chip>
                            </td>
                            <td>
                                <v-avatar size="36px" color="red">
                                    <img
                                        src="https://gamepedia.cursecdn.com/wowpedia/9/9d/Druid-tauren-f-80.gif?version=95f80ece271e0cef61a974e3398b1b9c"
                                        alt="alt"
                                    />
                                </v-avatar>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            membersDatabase: [
                {
                    nickname: 'clickys',
                    class: 'Druid',
                    role: 'CL',
                    avatar: 'druid'
                },
                {
                    nickname: 'clickys',
                    class: 'Rogue',
                    avatar: 'druid',
                    role: ''
                },
                {
                    nickname: 'clickys',
                    class: 'Druid',
                    avatar: 'druid'
                }
            ],
            filteredMembers: [],
            filters: [
                {
                    name: 'All'
                },
                {
                    name: 'Druid'
                },
                {
                    name: 'Paladin'
                }
            ]
        };
    },

    methods: {
        showAllMembers: function() {
            this.filteredMembers = [...this.membersDatabase];
        },
        show: function(wowClass) {
            if (wowClass === 'All') {
                this.filteredMembers = [...this.membersDatabase];
                return;
            }
            this.filteredMembers = this.membersDatabase.filter(member => {
                return member.class === wowClass;
            });
        }
    },

    computed: {
        members: function() {
            return this.filteredMembers;
        }
    },
    mounted() {
        this.showAllMembers();
    }
};
</script>
