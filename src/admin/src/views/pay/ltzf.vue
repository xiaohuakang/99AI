<route lang="yaml">
meta:
  title: 蓝兔支付设置
</route>

<script lang="ts" setup>
import apiConfig from '@/api/modules/config';
import type { FormInstance, FormRules } from 'element-plus';
import { ElMessage } from 'element-plus';
import { onMounted, reactive, ref } from 'vue';

const formInline = reactive({
  payLtzfStatus: '',
  payLtzfMchId: '',
  payLtzfSecret: '',
  payLtzfNotifyUrl: '',
  payLtzfReturnUrl: '',
});

const rules = ref<FormRules>({
  payLtzfStatus: [
    { required: true, trigger: 'change', message: '请选择当前支付开启状态' },
  ],
  payLtzfSecret: [
    { required: true, trigger: 'blur', message: '请填写商户秘钥' },
  ],
  payLtzfMchId: [{ required: true, trigger: 'blur', message: '请填写商户号' }],
  payLtzfNotifyUrl: [
    { required: true, trigger: 'blur', message: '请填写支付通知地址' },
  ],
});

const formRef = ref<FormInstance>();

async function queryAllconfig() {
  const res = await apiConfig.queryConfig({
    keys: [
      'payLtzfSecret',
      'payLtzfNotifyUrl',
      'payLtzfReturnUrl',
      'payLtzfMchId',
      'payLtzfStatus',
    ],
  });
  Object.assign(formInline, res.data);
}

function handlerUpdateConfig() {
  formRef.value?.validate(async (valid) => {
    if (valid) {
      try {
        await apiConfig.setConfig({ settings: fotmatSetting(formInline) });
        ElMessage.success('变更配置信息成功');
      } catch (error) {}
      queryAllconfig();
    } else {
      ElMessage.error('请填写完整信息');
    }
  });
}

function fotmatSetting(settings: any) {
  return Object.keys(settings).map((key) => {
    return {
      configKey: key,
      configVal: settings[key],
    };
  });
}

onMounted(() => {
  queryAllconfig();
});
</script>

<template>
  <div>
    <PageHeader>
      <template #title>
        <div class="flex items-center gap-4">蓝兔支付设置</div>
      </template>
      <template #content>
        <div class="text-sm/6">
          <div>
            <a href="https://www.ltzf.cn/" target="_blank">蓝兔支付</a>
            为第三方支付，接入请购买微信渠道。
          </div>
          <div>支付通知地址为： https://您的域名/api/pay/notify。</div>
        </div>
      </template>
      <HButton outline @click="handlerUpdateConfig">
        <SvgIcon name="i-ri:file-text-line" />
        保存设置
      </HButton>
    </PageHeader>

    <el-card style="margin: 20px">
      <el-form
        ref="formRef"
        :rules="rules"
        :model="formInline"
        label-width="120px"
      >
        <el-row>
          <el-col :xs="24" :md="20" :lg="15" :xl="12">
            <el-form-item label="启用当前支付" prop="payLtzfMchId">
              <el-switch
                v-model="formInline.payLtzfStatus"
                active-value="1"
                inactive-value="0"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :md="20" :lg="15" :xl="12">
            <el-form-item label="商户号" prop="payLtzfMchId">
              <el-input
                v-model="formInline.payLtzfMchId"
                placeholder="请填写商户号"
                clearable
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :md="20" :lg="15" :xl="12">
            <el-form-item label="商户密钥" prop="payLtzfSecret">
              <el-input
                v-model="formInline.payLtzfSecret"
                placeholder="请填写商户秘钥"
                clearable
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :md="20" :lg="15" :xl="12">
            <el-form-item label="支付通知地址" prop="payLtzfSecret">
              <el-input
                v-model="formInline.payLtzfNotifyUrl"
                placeholder="请填写支付通知地址"
                clearable
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :md="20" :lg="15" :xl="12">
            <el-form-item label="支付回调地址" prop="payLtzfSecret">
              <el-input
                v-model="formInline.payLtzfReturnUrl"
                placeholder="请填写支付成功后的回跳地址"
                clearable
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>
