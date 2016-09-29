/*
 * Copyright 2016 Conserve It, Inc. All Rights Reserved.
 */
package com.conserveit.ux.require;

import javax.baja.naming.BOrd;
import javax.baja.nre.annotations.*;
import javax.baja.sys.*;
import javax.baja.web.js.*;

/**
 * Configures RequireJS to include the Foundation 6 library.
 *
 * @author Callum Rosel on 08/07/2016.
 */
@NiagaraType
@NiagaraSingleton
@SuppressWarnings("unused")
public final class BRequireJsConfigFoundation
  extends BSingleton
  implements BIRequireJsConfig
{
  private BRequireJsConfigFoundation() {}

  public static final BRequireJsConfigFoundation INSTANCE = new BRequireJsConfigFoundation();

  @Override
  public Type getType() { return TYPE; }
  public static final Type TYPE = Sys.loadType(BRequireJsConfigFoundation.class);

  @Override
  public JsInfo getJsInfo(Context cx)
  {
    return JS_INFO;
  }

  private static final JsInfo JS_INFO = JsInfo.make(
    BOrd.make("module://n4Foundation/rc/js/require/require-js-config-foundation.js"));
}
