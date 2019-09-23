<template>
    <v-container fluid fill-height class="grey" darken-4>
        <v-layout wrap>
            <v-flex xs12 md6>
                <v-chip pill class="mb-1">
                    <v-avatar left class="red white--text">
                        RL
                    </v-avatar>
                    Raid Leader
                </v-chip>
                <v-chip pill class="mb-1">
                    <v-avatar left class="red white--text">
                        GM
                    </v-avatar>
                    Guild Master
                </v-chip>
                <v-chip pill class="mb-1">
                    <v-avatar left class="red white--text">
                        CL
                    </v-avatar>
                    Class Leader
                </v-chip>
                <v-chip pill class="">
                    <v-avatar left class="red white--text">
                        O
                    </v-avatar>
                    Officer
                </v-chip>
                <br />
                <v-chip pill class="mt-2">
                    <v-avatar left class="red white--text">
                        C
                    </v-avatar>
                    Casual
                </v-chip>
                <v-chip pill class="mt-2">
                    <v-avatar left class="red white--text">
                        BL
                    </v-avatar>
                    Bank Leader
                </v-chip>
                <v-chip pill class="mt-2">
                    <v-avatar left class="red white--text">
                        RDR
                    </v-avatar>
                    Raid Data Record
                </v-chip>
                <v-chip pill class="mt-2    ">
                    <v-avatar left class="red white--text">
                        MT
                    </v-avatar>
                    Main Tank
                </v-chip>
                <br />
                <v-chip pill class="mt-2">
                    <v-avatar left class="red white--text">
                        RO
                    </v-avatar>
                    Raid Organizer
                </v-chip>
                <v-chip pill class="mt-2">
                    <v-avatar left class="red white--text">
                        CR
                    </v-avatar>
                    Cheerleader
                </v-chip>
                <br />
            </v-flex>
            <v-flex xs12 md8>
                <v-simple-table dark>
                    <thead>
                        <tr>
                            <th class="text-center">ID</th>
                            <th class="text-center">Fullname</th>
                            <th class="text-center">Nickname</th>
                            <th class="text-center">Battletag</th>
                            <th class="text-center">Class</th>
                            <th class="text-center">Role</th>
                            <th class="text-center">Rank</th>
                            <th class="text-center"></th>
                            <th class="text-center">
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on }">
                                        <v-icon v-on="on">mdi-chevron-down</v-icon>
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
                            class="text-center"
                        >
                            <td>{{ member.id }}</td>
                            <td>{{ member.fullname }}</td>
                            <td>{{ member.nickname }}</td>
                            <td>{{ member.battletag }}</td>
                            <td>
                                {{ member.class }}
                            </td>
                            <td>{{ member.raidRole }}</td>
                            <td>
                                <template v-if="member.guildRoles.length">
                                    <v-chip
                                        pill
                                        class="orange font-weight-bold"
                                        v-for="(role,
                                        index) in member.guildRoles"
                                        v-bind:key="
                                            member.nickname + role + index
                                        "
                                    >
                                        {{ role }}
                                    </v-chip>
                                </template>
                            </td>
                            <td>
                                <v-avatar>
                                    <img :src="member.classAvatar" alt="alt" />
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
const fs = require('fs');

const classAvatars = {
    warrior: require('../assets/avatars/WoW-Classic-Warrior.png'),
    shaman: require('../assets/avatars/WoW-Classic-Shaman-Guide.png'),
    priest: require('../assets/avatars/WoW-Classic-Priest-Guide.png'),
    mage: require('../assets/avatars/mage_13.png'),
    druid: require('../assets/avatars/WoW-Classic-Druid-Guide.png'),
    rogue: require('../assets/avatars/WoW-Classic-Rogue-Guide.png'),
    warlock: require('../assets/avatars/WoW-Classic-Warlock-Guide-150x150.png'),
    hunter: require('../assets/avatars/WoW-Classic-Hunter-Guide-150x150.png')
};
export default {
    data() {
        return {
            id: 1,
            membersDatabase: [
                {
                    fullname: 'Nicholas Evangelide',
                    nickname: 'ib0x',
                    battletag: 'ib0x#2318',
                    class: 'Rogue',
                    guildRoles: ['GM', 'WD'],
                    raidRole: 'DPS',
                    classAvatar: classAvatars.rogue
                },
                {
                    fullname: 'Andre Chris',
                    nickname: 'javascript(clickys)',
                    battletag: 'clickys#2974',
                    class: 'Hunter',
                    guildRoles: ['GM', 'WD'],
                    raidRole: 'DPS',
                    classAvatar: classAvatars.hunter
                },
                {
                    fullname: 'Andreas Christodoulides',
                    nickname: 'Electrichair',
                    battletag: 'Andreas#8266	',
                    class: 'Druid',
                    guildRoles: ['M'],
                    raidRole: 'Healer',
                    classAvatar: classAvatars.druid
                },
                {
                    fullname: 'George',
                    nickname: 'WildFaith',
                    battletag: '',
                    class: 'Druid',
                    guildRoles: ['T'],
                    raidRole: 'Healer',
                    classAvatar: classAvatars.druid
                },
                {
                    fullname: 'Panos Araouzos',
                    nickname: 'Rezilis',
                    battletag: '',
                    class: 'Druid',
                    guildRoles: ['T'],
                    raidRole: 'Healer',
                    classAvatar: classAvatars.druid
                },
                {
                    fullname: 'Alex Konstantinou',
                    nickname: 'Tinder',
                    battletag: 'Alex11#2648',
                    class: 'Hunter',
                    guildRoles: ['M'],
                    raidRole: 'DPS',
                    classAvatar: classAvatars.druid
                },
                {
                    fullname: 'Michael Angelos Georgiou',
                    nickname: 'Deadshotcy',
                    battletag: 'Deathbringer#21947',
                    class: 'Hunter',
                    guildRoles: ['T'],
                    raidRole: 'DPS',
                    classAvatar: classAvatars.druid
                },
                {
                    fullname: 'Alex Christoforou',
                    nickname: 'Shemaill',
                    battletag: 'Babba#21410	',
                    class: 'Mage',
                    guildRoles: ['M'],
                    raidRole: 'DPS',
                    classAvatar: classAvatars.mage
                }
            ],
            filteredMembers: [],
            filters: [
                {
                    name: 'All'
                },
                {
                    name: 'Warrior'
                },
                {
                    name: 'Shaman'
                },
                {
                    name: 'Priest'
                },
                {
                    name: 'Druid'
                },
                {
                    name: 'Mage'
                },
                {
                    name: 'Rogue'
                },
                {
                    name: 'Warlock'
                },
                {
                    name: 'Hunter'
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
        },

        createID: function() {
            let id = this.id;
            let numberOfIdDigits = id.toString().split('');
            console.log(numberOfIdDigits);

            for (let i = 0; i < this.membersDatabase.length; i++) {
                if (numberOfIdDigits < 2) {
                    this.membersDatabase[i].id = `#00${this.id++}`;
                } else {
                    this.membersDatabase[i].id = `#0${this.id++}`;
                }
            }
        }
    },

    computed: {
        members: function() {
            return this.filteredMembers;
        }
    },

    mounted() {
        this.createID();
        this.showAllMembers();
    }
};
</script>
