/*
 * Copyright 2016 Conserve It, Inc. All Rights Reserved.
 */
package com.conserveit.ux;

import javax.baja.naming.BOrd;
import javax.baja.sys.*;
import javax.baja.web.BIFormFactorMax;
import javax.baja.web.js.*;

/**
 *
 * @author Callum Rosel
 */
@SuppressWarnings("unused")
public final class BN4FoundationWidget
    extends BSingleton
    implements BIJavaScript, BIFormFactorMax
{
  private BN4FoundationWidget() {}
  public static final BN4FoundationWidget INSTANCE = new BN4FoundationWidget();

  @Override
  public Type getType() { return TYPE; }
  public static final Type TYPE = Sys.loadType(BN4FoundationWidget.class);

  public JsInfo getJsInfo(Context cx) { return jsInfo; }

  private static final JsInfo jsInfo =
    JsInfo.make(BOrd.make("module://n4Foundation/rc/N4FoundationWidget.js"));
}