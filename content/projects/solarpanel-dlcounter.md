+++
authors = ["Hugo Veríssimo", "João Cardoso"]
title = "Counting Photovoltaic and Solar Panels from Aerial Images"
date = "2025-05-05"
repository = "https://github.com/Hugoverissimo21/SolarPanel-DLCounter"
description = "Detection and counting of solar panels in aerial images using deep learning and computer vision"
tags = [
    "python",
    "deep-learning",
    "computer-vision",
]
+++

This project aims to count photovoltaic and solar panels from aerial images using Deep Learning and Computer Vision techniques. It was developed as part of the Zindi Lacuna competition, which provided images of panels in Madagascar.

The work involved data cleaning and preprocessing, including correction of various polygons.

<div style="display: flex; align-items: center; gap: 20px;">

  <div style="flex: 1;">
    <p>Creation of hybrid models combining ResNet, EfficientNet, and DenseNet to extract image features, with an attention head to aggregate features extracted from image metadata, for subsequent regression of the number of each panel type.</p>
  </div>

  <img src="https://hugoverissimo21.github.io/SolarPanel-DLCounter/assets/nn (slides).png" width="45%">

</div>

Instance segmentation and object detection models were also used for the same purpose.

The methodology included hyperparameter tuning via cross-validation and selection of the final model based on its performance in terms of MAE, the only evaluation metric provided by the competition.

{{< tabgroup >}}
{{< tab name="Report" >}}
<iframe src="https://hugoverissimo21.github.io/SolarPanel-DLCounter/report.pdf"
        width="100%"
        height="750px"
        loading="lazy">
        Your browser does not support iframes.
</iframe>
{{< /tab >}}
{{< /tabgroup >}}
