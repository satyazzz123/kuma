// Generated by tools/resource-gen.
// Run "make generate" to update this file.

// nolint:whitespace
package v1alpha1

import (
	_ "embed"
	"fmt"

	"k8s.io/kube-openapi/pkg/validation/spec"
	"sigs.k8s.io/yaml"

	"github.com/kumahq/kuma/pkg/core/resources/model"
)

//go:embed schema.yaml
var rawSchema []byte
var schema = spec.Schema{}

func init() {
	if err := yaml.Unmarshal(rawSchema, &schema); err != nil {
		panic(err)
	}
}

const (
	MeshTrafficPermissionType model.ResourceType = "MeshTrafficPermission"
)

var _ model.Resource = &MeshTrafficPermissionResource{}

type MeshTrafficPermissionResource struct {
	Meta model.ResourceMeta
	Spec *MeshTrafficPermission
}

func NewMeshTrafficPermissionResource() *MeshTrafficPermissionResource {
	return &MeshTrafficPermissionResource{
		Spec: &MeshTrafficPermission{},
	}
}

func (t *MeshTrafficPermissionResource) GetMeta() model.ResourceMeta {
	return t.Meta
}

func (t *MeshTrafficPermissionResource) SetMeta(m model.ResourceMeta) {
	t.Meta = m
}

func (t *MeshTrafficPermissionResource) GetSpec() model.ResourceSpec {
	return t.Spec
}

func (t *MeshTrafficPermissionResource) SetSpec(spec model.ResourceSpec) error {
	protoType, ok := spec.(*MeshTrafficPermission)
	if !ok {
		return fmt.Errorf("invalid type %T for Spec", spec)
	} else {
		if protoType == nil {
			t.Spec = &MeshTrafficPermission{}
		} else {
			t.Spec = protoType
		}
		return nil
	}
}

func (t *MeshTrafficPermissionResource) Descriptor() model.ResourceTypeDescriptor {
	return MeshTrafficPermissionResourceTypeDescriptor
}

func (t *MeshTrafficPermissionResource) Validate() error {
	if v, ok := interface{}(t).(interface{ validate() error }); !ok {
		return nil
	} else {
		return v.validate()
	}
}

var _ model.ResourceList = &MeshTrafficPermissionResourceList{}

type MeshTrafficPermissionResourceList struct {
	Items      []*MeshTrafficPermissionResource
	Pagination model.Pagination
}

func (l *MeshTrafficPermissionResourceList) GetItems() []model.Resource {
	res := make([]model.Resource, len(l.Items))
	for i, elem := range l.Items {
		res[i] = elem
	}
	return res
}

func (l *MeshTrafficPermissionResourceList) GetItemType() model.ResourceType {
	return MeshTrafficPermissionType
}

func (l *MeshTrafficPermissionResourceList) NewItem() model.Resource {
	return NewMeshTrafficPermissionResource()
}

func (l *MeshTrafficPermissionResourceList) AddItem(r model.Resource) error {
	if trr, ok := r.(*MeshTrafficPermissionResource); ok {
		l.Items = append(l.Items, trr)
		return nil
	} else {
		return model.ErrorInvalidItemType((*MeshTrafficPermissionResource)(nil), r)
	}
}

func (l *MeshTrafficPermissionResourceList) GetPagination() *model.Pagination {
	return &l.Pagination
}

var MeshTrafficPermissionResourceTypeDescriptor = model.ResourceTypeDescriptor{
	Name:                MeshTrafficPermissionType,
	Resource:            NewMeshTrafficPermissionResource(),
	ResourceList:        &MeshTrafficPermissionResourceList{},
	Scope:               model.ScopeMesh,
	KDSFlags:            model.FromGlobalToZone,
	WsPath:              "meshtrafficpermissions",
	KumactlArg:          "meshtrafficpermission",
	KumactlListArg:      "meshtrafficpermissions",
	AllowToInspect:      true,
	IsPolicy:            true,
	IsExperimental:      false,
	SingularDisplayName: "Mesh Traffic Permission",
	PluralDisplayName:   "Mesh Traffic Permissions",
	IsPluginOriginated:  true,
	Schema:              &schema,
}
