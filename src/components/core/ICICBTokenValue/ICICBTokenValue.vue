<template>
    <span class="icicbtokenvalue">
        <f-token-value
            :value="cValue"
            :decimals="decimals"
            :number-currency="withPriceCurrency ? 'USD' : undefined"
            :use-placeholder="false"
            no-currency
            v-bind="$attrs"
        />
        <span v-if="!noCurrency"> NewYearChain</span>
    </span>
</template>

<script>
import FTokenValue from '@/components/core/FTokenValue/FTokenValue.vue';
import { WEIToICICB } from '@/utils/transactions.js';

export default {
    name: 'icicb-token-value',

    components: { FTokenValue },

    props: {
        value: {
            type: [String, Number],
            default: 0,
        },
        decimals: {
            type: Number,
            default: 2,
        },
        /** Convert value to NewYearChain */
        convert: {
            type: Boolean,
            default: false,
        },
        noCurrency: {
            type: Boolean,
            default: false,
        },
        withPriceCurrency: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        cValue() {
            return this.convert ? WEIToICICB(this.value) : this.value;
        },
    },
};
</script>
