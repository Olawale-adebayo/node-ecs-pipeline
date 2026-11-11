variable "aws_region" {
  description = "AWS region to build in"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Name used for all resources"
  type        = string
  default     = "node-ecs-pipeline"
}

variable "container_port" {
  description = "Port the app listens on inside the container"
  type        = number
  default     = 3000
}