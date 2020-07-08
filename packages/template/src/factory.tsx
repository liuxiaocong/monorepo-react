import React from "react";
import { observer } from "mobx-react";

import { TemplateStore, TemplatePresenter } from "./model";
import ListView from "./views/list.view";

export default class TemplateFactory {
  constructor(
    private store: TemplateStore,
    private presenter: TemplatePresenter
  ) {}

  create() {
    return observer(() => <ListView />);
  }
}