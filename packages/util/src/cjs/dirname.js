// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

module.exports = typeof __dirname === 'string'
  ? __dirname.replace('/cjs', '')
  : undefined;